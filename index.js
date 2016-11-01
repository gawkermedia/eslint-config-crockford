'use strict';

module.exports = {
	'rules': {
		'curly': [
			2,
			'all'
		],
		'keyword-spacing': [
			2, {}
		],
		'space-before-blocks': [
			2,
			'always'
		],
		'wrap-iife': 2,
		'space-before-function-paren': [
			2,
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'ignore'
			}
		],
		'one-var': [
			2,
			'always'
		],
		'vars-on-top': 2,
		'no-empty': [
			2, {
				'allowEmptyCatch': true
			}
		],
		'array-bracket-spacing': [
			2,
			'never', {}
		],
		'space-in-parens': [
			2,
			'never'
		],
		'no-underscore-dangle': 2,
		'comma-style': [
			2,
			'last'
		],
		'space-unary-ops': [
			2, {
				'words': false,
				'nonwords': false
			}
		],
		'space-infix-ops': 2,
		'no-with': 2,
		'indent': [
			2,
			4, {
				'SwitchCase': 1
			}
		],
		'no-mixed-spaces-and-tabs': 2,
		'no-trailing-spaces': 2,
		'comma-dangle': [
			2,
			'never'
		],
		'brace-style': [
			2,
			'1tbs', {
				'allowSingleLine': true
			}
		],
		'eol-last': 2,
		'dot-notation': 2,
		'no-multi-str': 2,
		'key-spacing': [
			2, {
				'afterColon': true
			}
		]
	}
};