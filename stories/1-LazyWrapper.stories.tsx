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

const ImageList = () => {
	return (
		<LazyWrapper placeholder={loading}>
			{imageSrcList.concat(imageSrcList).map((item, index) => {
				return (
					<img style={imageElement} key={index} data-src={item} name="lazy" />
				);
			})}
		</LazyWrapper>
	);
};

export const LazyWrapperComponent = () => <ImageList></ImageList>;
