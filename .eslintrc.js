module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true,
		mocha: true
	},
	extends: ['airbnb-base'],
	plugins: [],

	rules: {
		'class-methods-use-this': 0,
		'no-alert': 0,
		'no-console': 0,
		'no-confusing-arrow': 0,
		'comma-dangle': [2, 'never'],
		'arrow-parens': [2, 'as-needed'],
		'linebreak-style': 0,
		'padded-blocks': 0,
		indent: [1, 'tab'],
		// 'vue/html-indent': [1, 'tab'],
		'no-underscore-dangle': [2, { allow: ['_id', '__v'] }],
		'no-param-reassign': [2, { props: false }],
		'new-cap': [2, { capIsNewExceptions: ['Router', 'ObjectId', 'Given', 'When', 'Then'] }],
		'no-tabs': 0,
		'max-len': [1, 150], // extended
		'no-plusplus': 0, // disabled
		"object-curly-newline": [0],

		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		// allow optionalDependencies
		// 'import/no-extraneous-dependencies': ['error', {
		// 	optionalDependencies: ['test/unit/index.js']
		// }],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}