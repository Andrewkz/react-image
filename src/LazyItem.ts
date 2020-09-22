import { createElement, useLayoutEffect, useRef } from 'react';
import {
	ObserverOptions,
	IntersectionObserverEntryType,
	IProps,
} from './types';
import { loadImage, call, isNull, setImage } from './utils/index';

const defaultObserverOptions: ObserverOptions = {
	root: undefined,
	rootMargin: undefined,
	threshold: undefined,
};

const observerKeys: ObserverOptions[] = [];
const observers = new WeakMap<ObserverOptions, IntersectionObserver>();
const images = new WeakMap<
	HTMLImageElement,
	{ observer: IntersectionObserver; options: IProps }
>();

const LazyItem = (props) => {
	const currentRef = useRef<HTMLImageElement>(null);

	useLayoutEffect(() => {
		if (isNull(currentRef.current)) return;
		initElement(currentRef.current, props);
	});

	const createIntersectionObserver = (options: ObserverOptions) =>
		new IntersectionObserver(loadingCallback, options);

	function loadingCallback(entries: IntersectionObserverEntryType[]) {
		entries
			.filter((entry) => entry.isIntersecting || entry.intersectionRatio > 0)
			.forEach((entry) => {
				const target = entry.target as HTMLImageElement;
				const metaInfo = images.get(target);
				if (!metaInfo) {
					console.warn('Could not find meta data for src');
					return;
				}
				metaInfo.observer.unobserve(target);
				loadImage(metaInfo.options.url)
					.catch(() => {
						if (metaInfo.options.errorImage) {
							return loadImage(metaInfo.options.errorImage);
						}
						return Promise.resolve(metaInfo.options.placeholder);
					})
					.catch(() => metaInfo.options.placeholder)
					.then((imagePath: string) => {
						setImage(target as HTMLImageElement, imagePath);
						call(metaInfo.options.onLoad);
					});
			});
	}

	function initElement(element: HTMLImageElement, metadata: IProps) {
		const options = metadata.options || defaultObserverOptions;
		let observerKey = observerKeys.find(
			(oKey) =>
				oKey.root === options.root &&
				oKey.rootMargin === options.rootMargin &&
				oKey.threshold === options.threshold,
		);
		if (!observerKey) {
			observerKey = options;
			observerKeys.push(observerKey);
		}
		let observer = observers.get(observerKey);
		if (!observer) {
			observer = createIntersectionObserver(observerKey);
			observers.set(observerKey, observer);
		}
		images.set(element, {
			observer,
			options: metadata,
		});
		observer.observe(element);
	}

	return createElement(
		'img',
		{
			...props,
			ref: currentRef,
		},
		props.children,
	);
};

export default LazyItem;
