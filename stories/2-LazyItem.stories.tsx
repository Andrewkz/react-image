import React from 'react';
import { LazyItem } from '../src/index';
import loading from '../static/loading.svg';
import './app.css';
import 'normalize.css';

export default {
	title: 'LazyImage',
	component: LazyItem,
};

const imageElement = {
	width: 200,
	height: 120,
	display: 'inline-block',
	marginRight: 4,
};

const imageSrcList = [
	'https://picsum.photos/id/100/200/120',
	'https://picsum.photos/id/101/200/120',
	'https://picsum.photos/id/102/200/120',
	'https://picsum.photos/id/103/200/120',
	'https://picsum.photos/id/104/200/120',
	'https://picsum.photos/id/106/200/120',
	'https://picsum.photos/id/107/200/120',
	'https://picsum.photos/id/108/200/120',
	'https://picsum.photos/id/109/200/120',
	'https://picsum.photos/id/110/200/120',
	'https://picsum.photos/id/111/200/120',
	'https://picsum.photos/id/112/200/120',
	'https://picsum.photos/id/113/200/120',
	'https://picsum.photos/id/114/200/120',
	'https://picsum.photos/id/115/200/120',
	'https://picsum.photos/id/116/200/120',
	'https://picsum.photos/id/117/200/120',
	'https://picsum.photos/id/118/200/120',
	'https://picsum.photos/id/119/200/120',
	'https://picsum.photos/id/120/200/120',
	'https://picsum.photos/id/121/200/120',
	'https://picsum.photos/id/122/200/120',
	'https://picsum.photos/id/123/200/120',
	'https://picsum.photos/id/124/200/120',
	'https://picsum.photos/id/125/200/120',
	'https://picsum.photos/id/126/200/120',
	'https://picsum.photos/id/127/200/120',
	'https://picsum.photos/id/128/200/120',
	'https://picsum.photos/id/129/200/120',
	'https://picsum.photos/id/130/200/120',
	'https://picsum.photos/id/131/200/120',
	'https://picsum.photos/id/132/200/120',
	'https://picsum.photos/id/133/200/120',
	'https://picsum.photos/id/134/200/120',
	'https://picsum.photos/id/135/200/120',
	'https://picsum.photos/id/136/200/120',
	'https://picsum.photos/id/137/200/120',
	'https://picsum.photos/id/139/200/120',
	'https://picsum.photos/id/140/200/120',
	'https://picsum.photos/id/141/200/120',
];

export const LazyItemComponent = () =>
	imageSrcList.concat(imageSrcList).map((item, index) => {
		return (
			<LazyItem
				key={index}
				placeholder={loading}
				url={item}
				style={imageElement}
				className="image"
			></LazyItem>
		);
	});
