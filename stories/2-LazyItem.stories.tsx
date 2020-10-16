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
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://img1.crystalbeauty.cn/22su3sii23r.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
	'https://w.wallhaven.cc/full/wy/wallhaven-wypk97.png',
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
