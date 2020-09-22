export function loadImage(imagePath: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = imagePath;
		img.onload = () => resolve(imagePath);
		img.onerror = (err) => reject(err);
	});
}

export const call = (fn) => fn && fn();

export const isNull = <T>(obj: T | null): obj is null => obj === null;

export function setImage(element: HTMLImageElement, imagePath: string) {
	element.src = imagePath;
	// 	element.style.backgroundImage = `url('${imagePath}')`;
}

export function addCssClassName(
	element: HTMLImageElement | HTMLDivElement,
	cssClassName: string,
) {
	if (!element.className.includes(cssClassName)) {
		element.className += ` ${cssClassName}`;
	}
}
