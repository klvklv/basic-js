const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
	let arr = [];
	let arrNum = [];
	let rtrn = {};
	for(let i = 0; i <domains.length; i++) {
		let subDomain = domains[i].split('.');
		let str = '';
		for(let j = subDomain.length - 1; j >= 0; j--) {
			str += '.' + subDomain[j];
			let indx = arr.indexOf(str);
			if(indx < 0) {
				arr.push(str);
				arrNum.push(1);
			}
			else {
				arrNum[indx]++;
			}
		}
	}
	for(let i = 0; i < arr.length; i++) {
		rtrn[arr[i]] = arrNum[i];
	}
	return rtrn;
}

module.exports = {
  getDNSStats
};
