import React,{useEffect, useRef, CSSProperties} from 'react'

interface info {
	src: string
	imgStyle?: CSSProperties
	alt?: string
}

export const Image: React.FC<info> = ({src, imgStyle, alt}) => {
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const target = imgRef.current
		if (target === null) {
			return;
		}
		if (!window.IntersectionObserver) require('intersection-observer');
		const imageObserver = new IntersectionObserver((entries) => {
			const currentTargetSrc = target.getAttribute('src');
			entries.forEach((item) => {
				if (
					(item.isIntersecting || item.intersectionRatio > 0) &&
					!currentTargetSrc
				) {
					target.setAttribute('src', src);
					target.setAttribute('alt', alt || '');
				}
			});
		});
		if (target.getAttribute('src')) {
			imageObserver.unobserve(target);
			return;
		} else {
			imageObserver.observe(target);
		}
	}, [src, alt]);

	return <img ref={imgRef} style={imgStyle} alt=""></img>;
};
