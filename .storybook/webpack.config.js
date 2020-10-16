// webpack.config.js
module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.stories\.tsx?$/,
		loaders: [require.resolve('@storybook/source-loader')],
		enforce: 'pre',
	});
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
	});
	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
