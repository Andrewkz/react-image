import React from 'react';

export type ObserverOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number | number[];
};

export type LazyWrapperProps = {
	placeholder?: string;
	errorImage?: string;
	options?: ObserverOptions;
	style?: React.CSSProperties;
	className?: string;
	children?: React.ReactNode;
};

export type LazyItemProps = {
	url: string;
	alt?: string;
	placeholder?: string;
	errorImage?: string;
	className?: string;
	onLoad?: () => void;
	options?: ObserverOptions;
	style?: React.CSSProperties;
};

/** @deprecated Use LazyWrapperProps instead */
export type Props = LazyWrapperProps;

/** @deprecated Use LazyItemProps instead */
export type IProps = LazyItemProps;

export type IntersectionObserverEntryType = IntersectionObserverEntry & {
	isIntersecting: boolean;
};
