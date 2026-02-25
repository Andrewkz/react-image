import React, { useRef, useEffect, useCallback } from 'react';
import { ObserverOptions, LazyWrapperProps } from './types';
import { loadImage } from './utils/index';
import 'intersection-observer';

const defaultObserverOptions: ObserverOptions = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

const LazyWrapper: React.FC<LazyWrapperProps> = ({
	placeholder,
	errorImage,
	options,
	style,
	className,
	children,
}) => {
	const root = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	const handleIntersection = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				if (entry.target.getAttribute('name') !== 'lazy') return;
				if (!entry.isIntersecting && entry.intersectionRatio <= 0) {
					if (!entry.target.getAttribute('src')) {
						entry.target.setAttribute('src', placeholder || '');
					}
					return;
				}

				const element = entry.target;
				const src = element.getAttribute('data-src');
				if (!src) return;

				loadImage(src)
					.catch(() => {
						element.setAttribute('src', '');
						if (errorImage) {
							return loadImage(errorImage);
						}
						return Promise.resolve(placeholder || '');
					})
					.then((res: string) => {
						element.setAttribute('src', res);
						element.removeAttribute('name');
						element.removeAttribute('data-src');
						if (observerRef.current) {
							observerRef.current.unobserve(element);
						}
					});
			});
		},
		[placeholder, errorImage],
	);

	useEffect(() => {
		if (!root.current) return;

		const images = Array.from(
			root.current.querySelectorAll<HTMLImageElement>('img[name=lazy]'),
		);

		if (!images.length) return;

		const observer = new IntersectionObserver(
			handleIntersection,
			options || defaultObserverOptions,
		);
		observerRef.current = observer;

		images.forEach((image) => observer.observe(image));

		return () => {
			observer.disconnect();
			observerRef.current = null;
		};
	}, [handleIntersection, options]);

	return (
		<div ref={root} style={style} className={className}>
			{children}
		</div>
	);
};

export default LazyWrapper;
