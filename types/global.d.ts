// import React from "react";

declare namespace JSX {
	interface IntrinsicElements {
		img: {
			'data-src': string;
			name?: string;
		} & React.DetailedHTMLProps<
			React.ImgHTMLAttributes<HTMLImageElement>,
			HTMLImageElement
		>;
	}
}
