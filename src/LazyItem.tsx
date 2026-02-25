import React, { useEffect, useRef } from 'react';
import { ObserverOptions, LazyItemProps } from './types';
import { loadImage, setImage } from './utils/index';
import 'intersection-observer';

const defaultObserverOptions: ObserverOptions = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

const LazyItem: React.FC<LazyItemProps> = ({
	url,
	alt,
	placeholder,
	errorImage,
	className,
	onLoad,
	options,
	style,
}) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const loadedRef = useRef(false);

	useEffect(() => {
		const element = imgRef.current;
		if (!element || loadedRef.current) return;

		if (placeholder) {
			setImage(element, placeholder);
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;

				observer.unobserve(entry.target);
				const target = entry.target as HTMLImageElement;

				loadImage(url)
					.catch(() => {
						if (errorImage) {
							return loadImage(errorImage);
						}
						return Promise.resolve(placeholder || '');
					})
					.catch(() => placeholder || '')
					.then((imagePath: string) => {
						setImage(target, imagePath);
						loadedRef.current = true;
						if (onLoad) onLoad();
					});
			});
		}, options || defaultObserverOptions);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [url, placeholder, errorImage, onLoad, options]);

	return (
		<img ref={imgRef} alt={alt || ''} style={style} className={className} />
	);
};

export default LazyItem;
