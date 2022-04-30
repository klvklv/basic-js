const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
	if(!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
	let resArr = [];
	let nextEl = false;
	for(let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case "--discard-next":
				i++;
				nextEl = true;
				break;
			case "--discard-prev":
				if(resArr.length > 0 && !nextEl) resArr.pop();
				break;
			case "--double-next":
				if(i < arr.length - 1) {
					i++;
					resArr.push(arr[i]);
					resArr.push(arr[i]);
				}
				
				break;
			case "--double-prev":
				if(i > 0 && !nextEl) resArr.push(arr[i - 1]);
				break;
		
			default:
				nextEl = false;
				resArr.push(arr[i]);
				break;
		}
	}
	return resArr;
}

module.exports = {
  transform
};
