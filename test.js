import MarkdownIt from 'markdown-it'
import markdownItTime from './main.js'

const md = new MarkdownIt('commonmark')
md.use(markdownItTime)

const text = `今天日期是   2:@今
年2@( 2024)`

const result = md.render(text)
console.log(result)

