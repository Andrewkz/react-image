// declare namespace JSX {
// 	interface IntrinsicElements {
// 		img: {
// 			'data-src': string;
// 			name?: string;
// 		} & React.DetailedHTMLProps<
// 			React.ImgHTMLAttributes<HTMLImageElement>,
// 			HTMLImageElement
// 		>;
// 	}
// }
import 'react';

declare module 'react' {
	interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
		'data-src'?: string;
		name?: string;
	}
}
