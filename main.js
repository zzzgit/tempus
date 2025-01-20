const rule = (state, silent)=> {
	const pos = state.pos
	const max = state.posMax

	if(silent){ return false }
	if (state.src.charCodeAt(pos) !== 0x40/* @ */){ return false }
	if (pos + 3 >= max){ return false }

	const labelStart = pos + 1
	let labelEnd = -1

	for (let i = labelStart; i < max; i++){
		// find @(
		if (state.src.charCodeAt(i) === 0x40 && state.src.charCodeAt(i + 1) === 0x28){
			labelEnd = i
			break
		}
	}

	if (labelEnd === -1){ return false }

	const valueStart = labelEnd + 2
	let valueEnd = -1

	for (let i = valueStart; i < max; i++){
		if (state.src.charCodeAt(i) === 0x29/* ) */){
			valueEnd = i
			break
		}
	}

	if (valueEnd === -1){ return false }

	let token = state.push('time_open', 'time', 1)
	token.markup = '@'
	token.attrs = [['datetime', state.src.slice(valueStart, valueEnd)]]

	token = state.push('text', '', 0)
	token.content = state.src.slice(labelStart, labelEnd)

	token = state.push('time_close', 'time', -1)
	token.markup = ')'

	state.pos = valueEnd + 1
	return true
}

export default (md)=> {
	md.inline.ruler.push('time', rule)
	// md.renderer.rules.time_open = function(tokens, idx){
	// 	return '<time datetime="' + tokens[idx + 1].content + '">'
	// }

	// md.renderer.rules.time_close = function(){
	// 	return '</time>'
	// }
}
