// module.exports = {
//     "extends": "airbnb",
// };
module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			modules: true,
			jsx: true,
			allowImportExportEverywhere: false,
			codeFrame: false,
			'arrow-body-style': 'off',
			'no-console': 'off',
			'no-continue': 'off',
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': 'off',
		'react/prop-types': ['error', { ignore: ['navigation', 'focused'] }],
		'react/display-name': [0, { ignoreTranspilerName: true }],
	},
};
