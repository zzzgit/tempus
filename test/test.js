import MarkdownIt from 'markdown-it'
import markdownItTime from '../main.js'
import assert from 'assert'

describe('markdownItTime plugin', function(){
	let md

	beforeEach(function(){
		md = new MarkdownIt('commonmark')
		md.use(markdownItTime)
	})

	it('should render the current date correctly', function(){
		const text = '今天日期是   2:@今'
		const result = md.render(text)
		assert(result.includes('今天日期是   2:@今'))
	})

	it('should render the specified date correctly', function(){
		const text = '年2@( 2024)'
		const result = md.render(text)
		assert(result.includes('年2@( 2024)'))
	})

	it('one case', function(){
		const text = `今天日期是   2:@今
		年2@( 2024)`
		const result = md.render(text)
		assert(result.includes('<time datetime'))
	})

	// ...additional test cases...
})
