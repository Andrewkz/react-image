export type ObserverOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number;
};

export type Props = {
	alt?: string;
	options?: ObserverOptions;
	style?: Record<string, unknown>;
	placeholder?: string;
	className?: string;
	errorImage?: string;
};

export type IntersectionObserverEntryType = IntersectionObserverEntry & {
	isIntersecting: boolean;
};

export type IProps = {
	url: string;
	placeholder?: string;
	errorImage?: string;
	className?: string;
	onLoad?: () => void;
	options?: ObserverOptions;
	style?: Record<string, unknown>;
};

export type ImgProps = JSX.IntrinsicElements['img'] &
	Props & {
		height: number | string;
		width: number | string;
	};

export type DivProps = JSX.IntrinsicElements['div'] &
	Props & {
		height?: number | string;
		width?: number | string;
	};
