module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
		},
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'react-app',
		'eslint:recommended',
		'prettier',
		'plugin:react/recommended',
	],
	plugins: ['prettier', 'react', 'react-hooks'],
	// extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	// globals: {
	//   Atomics: 'readonly',
	//   SharedArrayBuffer: 'readonly',
	//   _: true,
	//   $: true,
	// },
	// settings: {
	//   react: {
	//     pragma: 'React',
	//     version: 'detect',
	//   },
	// },
	rules: {
		'prettier/prettier': ['error'],
		'generator-star-spacing': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-find-dom-node': 'off',
		'react/prop-types': 'off',
		'no-console': 'off',
		'react/no-children-prop': 'off',
		'space-before-function-paren': 0,
	},
};
