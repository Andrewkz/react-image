import React, { useRef, useLayoutEffect } from 'react';
import { ObserverOptions, Props } from './types';
import { loadImage } from './utils/index';

const defaultObserverOptions: ObserverOptions = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

const nodeObject = new Object();

const LazyWrapper: React.FC<Props> = (props) => {
	const root = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		if (!root.current) return;
		let nodeMap = new WeakMap<Object, NodeListOf<HTMLImageElement>>();

		const childrenNode: NodeListOf<HTMLImageElement> = Array.prototype.slice.call(
			root.current.querySelectorAll('img[name=lazy]'),
		);
		if (!childrenNode.length) {
			return console.error('Could not find img tags in children');
		}
		nodeMap.set(nodeObject, childrenNode);

		if (!window.IntersectionObserver) require('intersection-observer');
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries
					.filter(
						(entry: IntersectionObserverEntry) =>
							entry.target.getAttribute('name') === 'lazy',
					)
					.forEach((entry: IntersectionObserverEntry) => {
						let element = entry.target;
						if (entry.isIntersecting || entry.intersectionRatio > 0) {
							const src = entry.target.getAttribute('data-src') as string;

							loadImage(src)
								.catch((err) => {
									element.setAttribute('src', '');
									if (props.errorImage) {
										return loadImage(props.errorImage);
									}
									return Promise.resolve(props.placeholder);
								})
								.then((res: string) => {
									element.setAttribute('src', res);
									element.removeAttribute('name');
									element.removeAttribute('data-src');
									observer.unobserve(element);
								});
						} else {
							element.setAttribute('src', props.placeholder || '');
						}
					});
			},
			props.options || defaultObserverOptions,
		);

		Array.prototype.slice
			.call(nodeMap.get(nodeObject) as NodeListOf<HTMLImageElement>)
			.forEach((image: HTMLImageElement) => {
				observer.observe(image);
			});
	});

	return <div ref={root}>{props.children}</div>;
};

export default LazyWrapper;
