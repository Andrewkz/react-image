import React from 'react';
import { Image } from '../src/index';
import img1 from '../static/wallhaven-1.jpg';
import img2 from '../static/wallhaven-2.png';
import img3 from '../static/wallhaven-3.jpg';
import img4 from '../static/wallhaven-4.jpg';
import img5 from '../static/wallhaven-5.jpg';
import 'normalize.css';

export default {
	title: 'LazyImage',
	component: Image,
};

const imageElement = {
	width: 200,
	height: 120,
};

const divElement = {
	width: 800,
};

const imageLength = new Array(200).fill('');

const imageAssemble = [img1, img2, img3, img4, img5];

const imageSrcList = imageLength
	.map((item) => {
		const randomOne = Math.round(Math.random() * 5);
		return imageAssemble[randomOne];
	})
	.filter(Boolean);

const ImageList = () => {
	return (
		<div style={divElement}>
			{imageSrcList.map((item, index) => {
				return (
					<Image key={index} imgStyle={imageElement} src={item} alt=""></Image>
				);
			})}
		</div>
	);
};

export const LazyImage = () => <ImageList></ImageList>;
