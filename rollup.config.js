import resolve from 'rollup-plugin-node-resolve'; // 帮助寻找node_modules里的包
import replace from '@rollup/plugin-replace'; // 替换待打包文件里的一些变量，如 process在浏览器端是不存在的，需要被替换
import commonjs from 'rollup-plugin-commonjs'; // 将非ES6语法的包转为ES6可用
import babel from 'rollup-plugin-babel'; // rollup 的 babel 插件，ES6转ES5
import typescriptPlugin from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'; // 压缩包
import typescript from 'typescript';
import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'production';
const env = process.env.NODE_ENV;
const globals = {
	react: 'React',
	'react-dom': 'ReactDOM',
};
const extensions = ['tsx', '.ts', 'js', 'jsx'];

const getBabelOptions = ({ useESModules }) => ({
	include: ['src/**/*'],
	exclude: '**/node_modules/**',
	runtimeHelpers: true,
	presets: [
		[
			'@babel/preset-typescript',
			{
				isTSX: true,
				allExtensions: true,
			},
		],
	],
	extensions,
	plugins: [
		[
			'@babel/transform-runtime',
			{
				regenerator: false,
				useESModules,
			},
		],
	],
});

export default [
	isProd && {
		input: 'src/index.ts',
		output: {
			file: `dist/${pkg.module}`,
			exports: 'named',
			format: 'esm',
		},
		external: Object.keys(globals),
		plugins: [
			resolve({ extensions }),
			commonjs(),
			typescriptPlugin({
				exclude: 'node_modules/**',
				typescript,
			}),
			babel(
				getBabelOptions({
					useESModules: true,
				}),
			),
		],
	},
	isProd && {
		input: 'src/index.ts',
		output: {
			file: `dist/${pkg.main}`,
			exports: 'named',
			format: 'cjs',
		},
		external: Object.keys(globals),
		plugins: [
			resolve({ extensions }),
			commonjs(),
			typescriptPlugin({
				exclude: 'node_modules/**',
				typescript,
			}),
			babel(
				getBabelOptions({
					useESModules: false,
				}),
			),
		],
	},
	{
		input: 'src/index.ts',
		output: {
			file: `dist/${pkg.unpkg}`,
			name: 'ReactLazyLoadImage',
			format: 'umd',
			globals,
		},
		external: Object.keys(globals),
		plugins: [
			resolve({ extensions }),
			commonjs(),
			typescriptPlugin({
				exclude: 'node_modules/**',
				typescript,
			}),
			babel(
				getBabelOptions({
					useESModules: true,
				}),
			),
			replace({
				'process.env.NODE_ENV': JSON.stringify(env),
			}),
			isProd && terser(),
		].filter(Boolean),
	},
].filter(Boolean);
