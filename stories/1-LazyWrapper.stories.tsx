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
	'https://picsum.photos/id/10/200/120',
	'https://picsum.photos/id/11/200/120',
	'https://picsum.photos/id/12/200/120',
	'https://picsum.photos/id/13/200/120',
	'https://picsum.photos/id/14/200/120',
	'https://picsum.photos/id/15/200/120',
	'https://picsum.photos/id/16/200/120',
	'https://picsum.photos/id/17/200/120',
	'https://picsum.photos/id/18/200/120',
	'https://picsum.photos/id/19/200/120',
	'https://picsum.photos/id/20/200/120',
	'https://picsum.photos/id/21/200/120',
	'https://picsum.photos/id/22/200/120',
	'https://picsum.photos/id/23/200/120',
	'https://picsum.photos/id/24/200/120',
	'https://picsum.photos/id/25/200/120',
	'https://picsum.photos/id/26/200/120',
	'https://picsum.photos/id/27/200/120',
	'https://picsum.photos/id/28/200/120',
	'https://picsum.photos/id/29/200/120',
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
