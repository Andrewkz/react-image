(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		270: function (module, exports, __webpack_require__) {
			module.exports =
				__webpack_require__.p + 'static/media/wallhaven-1.08aa7a69.jpg';
		},
		271: function (module, exports, __webpack_require__) {
			module.exports =
				__webpack_require__.p + 'static/media/wallhaven-2.013cdfc4.png';
		},
		272: function (module, exports, __webpack_require__) {
			module.exports =
				__webpack_require__.p + 'static/media/wallhaven-3.ff337799.jpg';
		},
		273: function (module, exports, __webpack_require__) {
			module.exports =
				__webpack_require__.p + 'static/media/wallhaven-4.f55c6df6.jpg';
		},
		274: function (module, exports, __webpack_require__) {
			module.exports =
				__webpack_require__.p + 'static/media/wallhaven-5.81f81eaf.jpg';
		},
		275: function (module, exports, __webpack_require__) {
			__webpack_require__(276),
				__webpack_require__(426),
				(module.exports = __webpack_require__(427));
		},
		342: function (module, exports) {},
		427: function (module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				function (module) {
					var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
						269,
					);
					(module._StorybookPreserveDecorators = !0),
						Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
							[__webpack_require__(617)],
							module,
						);
				}.call(this, __webpack_require__(428)(module));
		},
		617: function (module, exports, __webpack_require__) {
			var map = { './1-Image.stories.tsx': 623 };
			function webpackContext(req) {
				var id = webpackContextResolve(req);
				return __webpack_require__(id);
			}
			function webpackContextResolve(req) {
				if (!__webpack_require__.o(map, req)) {
					var e = new Error("Cannot find module '" + req + "'");
					throw ((e.code = 'MODULE_NOT_FOUND'), e);
				}
				return map[req];
			}
			(webpackContext.keys = function webpackContextKeys() {
				return Object.keys(map);
			}),
				(webpackContext.resolve = webpackContextResolve),
				(module.exports = webpackContext),
				(webpackContext.id = 617);
		},
		623: function (module, __webpack_exports__, __webpack_require__) {
			'use strict';
			__webpack_require__.r(__webpack_exports__),
				__webpack_require__.d(__webpack_exports__, 'LazyImage', function () {
					return _1_Image_stories_LazyImage;
				});
			var react = __webpack_require__(16),
				react_default = __webpack_require__.n(react),
				Image_Image = function Image(_ref) {
					var src = _ref.src,
						imgStyle = _ref.imgStyle,
						alt = _ref.alt,
						imgRef = Object(react.useRef)(null);
					return (
						Object(react.useEffect)(
							function () {
								var target = imgRef.current;
								if (null !== target) {
									window.IntersectionObserver || __webpack_require__(618);
									var imageObserver = new IntersectionObserver(function (
										entries,
									) {
										var currentTargetSrc = target.getAttribute('src');
										entries.forEach(function (item) {
											(item.isIntersecting || item.intersectionRatio > 0) &&
												!currentTargetSrc &&
												(target.setAttribute('src', src),
												target.setAttribute('alt', alt || ''));
										});
									});
									target.getAttribute('src')
										? imageObserver.unobserve(target)
										: imageObserver.observe(target);
								}
							},
							[src, alt],
						),
						react_default.a.createElement('img', {
							ref: imgRef,
							style: imgStyle,
							alt: '',
						})
					);
				},
				wallhaven_1 = __webpack_require__(270),
				wallhaven_1_default = __webpack_require__.n(wallhaven_1),
				wallhaven_2 = __webpack_require__(271),
				wallhaven_2_default = __webpack_require__.n(wallhaven_2),
				wallhaven_3 = __webpack_require__(272),
				wallhaven_3_default = __webpack_require__.n(wallhaven_3),
				wallhaven_4 = __webpack_require__(273),
				wallhaven_4_default = __webpack_require__.n(wallhaven_4),
				wallhaven_5 = __webpack_require__(274),
				wallhaven_5_default = __webpack_require__.n(wallhaven_5),
				imageElement =
					(__webpack_require__(619),
					(__webpack_exports__.default = {
						title: 'LazyImage',
						component: Image_Image,
					}),
					{ width: 200, height: 120 }),
				divElement = { width: 800 },
				imageLength = new Array(200).fill(''),
				imageAssemble = [
					wallhaven_1_default.a,
					wallhaven_2_default.a,
					wallhaven_3_default.a,
					wallhaven_4_default.a,
					wallhaven_5_default.a,
				],
				imageSrcList = imageLength
					.map(function (item) {
						var randomOne = Math.round(5 * Math.random());
						return imageAssemble[randomOne];
					})
					.filter(Boolean),
				_1_Image_stories_ImageList = function ImageList() {
					return react_default.a.createElement(
						'div',
						{ style: divElement },
						imageSrcList.map(function (item, index) {
							return react_default.a.createElement(Image_Image, {
								key: index,
								imgStyle: imageElement,
								src: item,
								alt: '',
							});
						}),
					);
				},
				_1_Image_stories_LazyImage = function LazyImage() {
					return react_default.a.createElement(
						_1_Image_stories_ImageList,
						null,
					);
				};
		},
	},
	[[275, 1, 2]],
]);
//# sourceMappingURL=main.08d28ab917de20b0fbb9.bundle.js.map
