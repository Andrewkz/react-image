export function loadImage(imagePath: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(imagePath);
		img.onerror = (err) => reject(err);
		img.src = imagePath;
	});
}

export const isNull = <T>(obj: T | null): obj is null => obj === null;

export function setImage(element: HTMLImageElement, imagePath: string): void {
	element.src = imagePath;
}

export function addCssClassName(
	element: HTMLImageElement | HTMLDivElement,
	cssClassName: string,
): void {
	element.classList.add(cssClassName);
}
