export type ObserverOptions = {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number;
};

export type Props = {
	defaultImage?: string;
	alt?: string;
	options?: ObserverOptions;
	style?: Object;
	loading?: string;
};

// export type IntersectionObserverEntryType = IntersectionObserverEntry & {
//   isIntersecting: boolean;
// };

// export type ImgProps = JSX.IntrinsicElements['img'] &
// 	Props & {
// 		height: number | string;
// 		width: number | string;
// 	};
