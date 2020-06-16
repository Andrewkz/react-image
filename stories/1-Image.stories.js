"use strict";
exports.__esModule = true;
exports.LazyImage = void 0;
var react_1 = require("react");
var index_1 = require("../src/index");
var wallhaven_1_jpg_1 = require("../static/wallhaven-1.jpg");
exports["default"] = {
    title: 'LazyImage',
    component: index_1.Image
};
exports.LazyImage = function () { return <index_1.Image src={wallhaven_1_jpg_1["default"]}></index_1.Image>; };
