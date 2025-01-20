# markdown-it-tempus

> `<time>` tag plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

`@@inserted@@` => `<time datetime="inserted">inserted</time>`

Markup uses the same conditions as CommonMark [emphasis](http://spec.commonmark.org/0.15/#emphasis-and-strong-emphasis).


## Install

```bash
npm install markdown-it-tempus --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-tempus'));

md.render('@@inserted@@') // => '<p><time datetime="inserted">inserted</time></p>'
```

## License

[MIT](https://github.com/zzzgit/markdown-it-tempus/blob/master/LICENSE)