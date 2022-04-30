const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
	let arr = n.toString().split('');
	for(let i = 0; i < arr.length-1; i++) {
		if(arr[i] < arr[i+1]) {
			arr.splice(i, 1);
			return parseInt(arr.join(''));
		}
	}
	arr.splice(arr.length - 1, 1);
	return parseInt(arr.join(''));
}

module.exports = {
  deleteDigit
};
