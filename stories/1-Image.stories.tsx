import React, { CSSProperties } from 'react';
import { Image } from '../src/index';
import img1 from '../static/wallhaven-1.jpg'
import 'normalize.css'

export default {
  title: 'LazyImage',
  component: Image,
};

const imageElement: CSSProperties = {
  width: 200,
  height: 120
}

const ImageList = (): any => {
  const exampleArr = new Array(100).fill(img1)
  return (
    exampleArr.map((item, index) => {
      return (
        <Image key={ index } imgStyle={ imageElement } src={ item } alt=''></Image>
      )
    })
  )
}

export const LazyImage = () => <ImageList></ImageList>;
