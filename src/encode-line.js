const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
	if(str == '') return '';
	let strEncoded = '';
	let arr = str.split('');
	let prevChar = arr[0];
	let count = 1;	
	for( let i = 1; i < str.length; i++) {
		if(prevChar == arr[i]) {
			count++;				
		}
		else {
			if(count == 1) strEncoded += prevChar;
			else strEncoded += count.toString() + prevChar;
			count = 1;
			prevChar = arr[i];
		}
	}
	if(count == 1) strEncoded += prevChar;
	else strEncoded += count.toString() + prevChar;
	return strEncoded;
}

module.exports = {
  encodeLine
};
