import React from 'react';
// import { LazyItem } from '../src/index';
import { LazyItem } from '../dist/lazyload-image.esm';
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
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/q9ipe6a6cjp.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
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
