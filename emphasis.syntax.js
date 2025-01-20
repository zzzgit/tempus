const rule = (state, silent)=> {
	const start = state.pos
	const TIME_REGEX = /^@@([a-zA-Z0-9\-\-:.+ ]+)@@/

	if (silent){ return false }
	if (state.src.charCodeAt(start) !== 0x40 /* @ */){
		return false
	}
	if (state.src.charCodeAt(start + 1) !== 0x40 /* @ */){
		return false
	}
	// if (start + 3 >= state.posMax){ return false }

	const match = state.src.slice(state.pos).match(TIME_REGEX)

	if (!match){
		return false
	}

	let token = state.push('time_open', 'time', 1)
	token.markup = '@@'

	token = state.push('text', '', 0)
	token.content = match[1]

	token = state.push('time_close', 'time', -1)
	token.markup = '@@'
	state.pos += match[0].length
	return true
}

export default (md)=> {
	md.inline.ruler.push('time', rule)

	md.renderer.rules.time_open = function(tokens, idx){
		return '<time datetime="' + tokens[idx + 1].content + '">'
	}

	md.renderer.rules.time_close = function(){
		return '</time>'
	}
}
