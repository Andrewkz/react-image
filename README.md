# react-image-to-lazyload

## 安装

npm install react-image-to-lazyload -D  
or  
yarn add react-image-to-lazyload -D

Example（LazyWrapper）:

```jsx
import * as React from 'react';
import { LazyWrapper } from 'react-image-to-lazyload';

<LazyWrapper placeholder={loading}>
	<img data-src={src} name="lazy" />
	<img data-src={src} name="lazy" />
	<img data-src={src} name="lazy" />
	<img data-src={src} name="lazy" />
	<img data-src={src} name="lazy" />
	<img data-src={src} name="lazy" />
</LazyWrapper>;
```

Example（LazyItem）:

```jsx
import * as React from 'react';
import { LazyItem } from 'react-image-to-lazyload';

<LazyItem placeholder={loading} url={src}></LazyItem>;
```

##### url (require: true)

LazyItem 组件的图片路径  
Type: `string`

##### data-src (require: true)

LazyWrapper 组件的图片路径  
Type: `string`

##### name (require: true)

LazyWrapper 组件的 name: lazy  
Type: `string`

##### placeholder?

默认图片  
Type: `string`

##### errorImage?

图片报错显示  
Type: `string`

##### onLoad?

LazyItem 组件图片加载后的回调
Type: `() => void`

##### options?

Type: `ObserverOptions`

IntersectionObserver options. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

##### style?

Type: `React.CSSProperties`

##### className?

Type: `React.CSSProperties`

##### ...Element.props?

## License

[MIT License](/LICENSE)
