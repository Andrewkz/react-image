import { createElement, useLayoutEffect, useRef } from 'react';
import {
	ObserverOptions,
	IntersectionObserverEntryType,
	IProps,
} from './types';

const defaultObserverOptions: ObserverOptions = {
	root: undefined,
	rootMargin: undefined,
	threshold: undefined,
};

const observerKeys: ObserverOptions[] = [];
const observers = new WeakMap<ObserverOptions, IntersectionObserver>();
const images = new WeakMap<
	Element,
	{ observer: IntersectionObserver; options: IProps }
>();

export const LazyItem = (props) => {
	const currentRef = useRef<HTMLImageElement>(null);

	const call = (fn) => fn && fn();
	const isNull = <T>(obj: T | null): obj is null => obj === null;
	const createIntersectionObserver = (options: ObserverOptions) =>
		new IntersectionObserver(loadingCallback, options);

	function loadingCallback(entrys: IntersectionObserverEntryType[]) {
		entrys
			.filter((entry) => entry.isIntersecting)
			.forEach((entry) => {
				const target = entry.target as HTMLImageElement | HTMLDivElement;
				const metaData = images.get(target);
				if (!metaData) {
					console.warn('Could not find meta data for image');
					return;
				}
				metaData.observer.unobserve(target);
				loadImage(metaData.options.image)
					.catch(() => {
						if (metaData.options.errorImage) {
							return loadImage(metaData.options.errorImage);
						}
						return Promise.resolve(metaData.options.defaultImage);
					})
					.catch(() => metaData.options.defaultImage)
					.then((imagePath: string) => {
						setImage(target as HTMLImageElement, imagePath);
						addCssClassName(target, 'lazy-loaded');
						call(metaData.options.onLoaded);
					});
			});
	}

	function setImage(
		element: HTMLImageElement | HTMLDivElement,
		imagePath: string,
	) {
		if (isImageElement(element)) {
			element.src = imagePath;
		} else {
			element.style.backgroundImage = `url('${imagePath}')`;
		}
	}

	function loadImage(imagePath: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.src = imagePath;
			img.onload = () => resolve(imagePath);
			img.onerror = (err) => reject(err);
		});
	}

	function isImageElement(
		element: HTMLImageElement | HTMLDivElement,
	): element is HTMLImageElement {
		return element.nodeName.toLowerCase() === 'img';
	}

	function addCssClassName(
		element: HTMLImageElement | HTMLDivElement,
		cssClassName: string,
	) {
		if (!element.className.includes(cssClassName)) {
			element.className += ` ${cssClassName}`;
		}
	}

	function registerImageToLazyLoad(element: Element, metadata: IProps) {
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

	useLayoutEffect(() => {
		if (isNull(currentRef.current)) return;
		registerImageToLazyLoad(currentRef.current, props);
	});

	const {
		style: incomingStyle,
		height,
		width,
		image,
		errorImage,
		options,
		onLoaded,
		defaultImage,
	} = props;

	const style = {
		...incomingStyle,
		backgroundImage: `url('${defaultImage}')`,
		height,
		width,
	};

	return createElement(
		'div',
		{ ...props, style, image, errorImage, options, onLoaded, ref: currentRef },
		props.children,
	);
};
