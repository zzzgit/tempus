import js from 'eslint-config-janus/js.js'
import mocha from 'eslint-config-janus/mocha.js'
import { jsify } from 'eslint-config-janus/utils.js'

const testGlob = 'test/**/*.js'
const testTsArr = jsify(mocha, { files: [testGlob] })

export default [
	...js,
	...testTsArr,
	{
		languageOptions: {
			parserOptions: {
				sourceType: 'module',
			},
		},
		rules: {
			'require-atomic-updates': [2, { allowProperties: true }],
		},
	},
]
