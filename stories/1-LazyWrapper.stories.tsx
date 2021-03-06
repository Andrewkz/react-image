import React from 'react';
import { LazyWrapper } from '../src/index';
import loading from '../static/loading.svg';
import 'normalize.css';

export default {
	title: 'LazyImage',
	component: LazyWrapper,
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

const ImageList = () => {
	return (
		<LazyWrapper placeholder={loading}>
			{imageSrcList.concat(imageSrcList).map((item, index) => {
				return (
					<img key={index} name="lazy" data-src={item} style={imageElement} />
				);
			})}
		</LazyWrapper>
	);
};

export const LazyWrapperComponent = () => <ImageList></ImageList>;
