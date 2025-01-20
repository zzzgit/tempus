import js from 'eslint-config-janus/js.js'

export default [
	...js,
	{
		name: 'config.mjs',
		files: ['*.mjs'],
		languageOptions: {
			sourceType: 'module',
		},
	},
	{
		languageOptions: {
			globals: {
				vscode: 'readonly',
				workspace: 'readonly',
				utils: 'readonly',
				lastLine: 'writable',
				lastDecor: 'writable',
				maxSmallIntegerV8: 'writable',
				setTimeout: 'readonly',
				console: 'readonly',
			},
			parserOptions: {
				sourceType: 'module',
			},
		},
		rules: {
			'require-atomic-updates': [2, { allowProperties: true }],
		},
	},
]
