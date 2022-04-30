const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
	chain : '',
	getLength() {
		if(this.chain.length == 0) return 0;
		let arrChain = this.chain.split('~~');
		return arrChain.length;
	},

	addLink( value ) {
		let val = '';
		if (arguments.length > 0) val = '' + value;
		if(val == '') val = '( )';
		else val = '( ' + val + ' )';
		if(this.chain.length == 0) this.chain = val;
		else this.chain = this.chain + '~~' + val;
		return chainMaker;
	},

	removeLink( position ) {
		if(this.chain.length > 0 && typeof position == 'number') {
			let arrChain = this.chain.split('~~');
			if(position - Math.floor(position == 0)) {
				if(position > 0 && position <= arrChain.length) {
					arrChain.splice(position - 1, 1);
					this.chain = arrChain.join('~~');
					return chainMaker;
				}
			}
		}
		this.chain = '';
		throw new Error("You can't remove incorrect link!");
		
	},

	reverseChain() {
		if(this.chain.length == 0) return chainMaker;
		let arrChain = this.chain.split('~~');
		this.chain = arrChain.reverse().join('~~');
		return chainMaker;
	},

	finishChain() {
		let ret = this.chain.split('').join('');
		this.chain = '';
		return ret;
	}
};

module.exports = {
  chainMaker
};
