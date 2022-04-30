const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
	let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
	let separator = options.separator !== undefined ? options.separator : '+';
	let addition = options.addition === undefined ? '' : options.addition == null ? 'null' : options.addition;
	let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
	let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
	let arr = [];
	for(let i = 0; i < repeatTimes; i++) {
		let arrAd = [];
		for(let j = 0; j < additionRepeatTimes; j++) {
			arrAd.push(addition);
		}
		let additions = arrAd.join(additionSeparator);
		let fullStr;
		if(str == null) fullStr = 'null';
		else fullStr = str;
		arr.push(fullStr + additions);
	}
	return arr.join(separator);
}

module.exports = {
  repeater
};
