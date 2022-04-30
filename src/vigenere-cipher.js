const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direction){
		this.dir = typeof direction == "undefined" ? true : direction;
	}

	encrypt(str, key) {
		if(typeof str == 'undefined' || typeof key == 'undefined') throw new Error('Incorrect arguments!');

		let strEnc = '';
		let fullKey = key.toUpperCase();

		while (fullKey.length < str.length) {
			fullKey += key.toUpperCase();
		}

		for( let i = 0, j = 0; i < str.length; i++) {
			if(!str[i].match(/[a-z]/i)) {
				strEnc += str[i];
			}
				else {
					strEnc += String.fromCharCode(((str[i].toUpperCase().charCodeAt(0) + fullKey[j++].charCodeAt(0)) % 26) + 65);
				}
		}
		if (this.dir) return strEnc;
		else return strEnc.split('').reverse().join('');
	}
	decrypt(str, key) {
		if(typeof str == 'undefined' || typeof key == 'undefined') throw new Error('Incorrect arguments!');
	
			let strEnc = '';
			let fullKey = key.toUpperCase();

			while (fullKey.length < str.length) {
				fullKey += key.toUpperCase();
			}

			for( let i = 0, j = 0; i < str.length; i++) {
				if(!str[i].match(/[a-z]/i)) {
					strEnc += str[i];
				}
					else {
						strEnc += String.fromCharCode(((str[i].toUpperCase().charCodeAt(0) - fullKey[j++].charCodeAt(0) + 26) % 26) + 65);
					}
			}

			if (this.dir) return strEnc;
			else return strEnc.split('').reverse().join('');
	}
}

/*
class VigenereCipheringMachine {
	constructor(direct) {
		this.direct = direct === undefined ? true : direct;
	 }


  encrypt(message, key) {

	if(message == undefined || key == undefined)
   	throw new Error('Incorrect arguments!');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
	if(message == undefined || key == undefined)
		throw new Error('Incorrect arguments!');
    // remove line with error and write your code here
  }
} */

module.exports = {
  VigenereCipheringMachine
};
