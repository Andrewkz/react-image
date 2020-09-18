import React, { useRef, useLayoutEffect } from 'react';
import { ObserverOptions, Props } from './types';

const defaultObserverOptions: ObserverOptions = {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0,
};

export const LazyImage: React.FC<Props> = (props) => {
	const root = useRef<HTMLDivElement>(null);

	function loadImage(imagePath: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = imagePath;
			img.onload = () => resolve(imagePath);
			img.onerror = (err) => reject(err);
		});
	}

	useLayoutEffect(() => {
		if (!root.current) return;
		let matchMap = new WeakMap<NodeListOf<Element>, NodeListOf<Element>>();
		let nodeMap = new WeakMap<NodeListOf<Element>, NodeListOf<Element>>();

		const matches = root.current.querySelectorAll('img[name=lazy]');
		matchMap.set(matches, matches);
		const childrenNode = Array.prototype.slice.call(matchMap.get(matches));
		nodeMap.set(childrenNode, childrenNode);

		if (!window.IntersectionObserver) require('intersection-observer');
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries
					.filter(
						(entry: IntersectionObserverEntry) =>
							(entry.target as HTMLImageElement).name === 'lazy',
					)
					.forEach((entry: IntersectionObserverEntry) => {
						let element = entry.target;
						if (entry.isIntersecting || entry.intersectionRatio > 0) {
							const src = entry.target.getAttribute('data-src') as string;
							loadImage(src)
								.catch((err) => {
									element.setAttribute('src', '');
								})
								.then((res: string) => {
									element.setAttribute('src', res);
									element.removeAttribute('name');
									element.removeAttribute('data-src');
									observer.unobserve(element);
								});
						} else {
							element.setAttribute('src', props.loading || '');
						}
					});
			},
			props.options || defaultObserverOptions,
		);
		Array.prototype.slice
			.call(nodeMap.get(childrenNode) as NodeListOf<HTMLImageElement>)
			.forEach((image: HTMLImageElement) => {
				observer.observe(image);
			});
	});

	return <div ref={root}>{props.children}</div>;
};
