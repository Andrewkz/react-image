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
	'https://picsum.photos/id/30/200/120',
	'https://picsum.photos/id/31/200/120',
	'https://picsum.photos/id/32/200/120',
	'https://picsum.photos/id/33/200/120',
	'https://picsum.photos/id/34/200/120',
	'https://picsum.photos/id/35/200/120',
	'https://picsum.photos/id/36/200/120',
	'https://picsum.photos/id/37/200/120',
	'https://picsum.photos/id/38/200/120',
	'https://picsum.photos/id/39/200/120',
	'https://picsum.photos/id/40/200/120',
	'https://picsum.photos/id/41/200/120',
	'https://picsum.photos/id/42/200/120',
	'https://picsum.photos/id/43/200/120',
	'https://picsum.photos/id/44/200/120',
	'https://picsum.photos/id/45/200/120',
	'https://picsum.photos/id/46/200/120',
	'https://picsum.photos/id/47/200/120',
	'https://picsum.photos/id/48/200/120',
	'https://picsum.photos/id/49/200/120',
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
