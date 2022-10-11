const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
  },
  addLink(value) {
    if (typeof value != 'undefined') {
      this.res.push(`( ${value} )~~`)
    } else {
      this.res.push(`( )~~`)
    }
    return this
  },
  removeLink(position) {
    if (position <= this.res.length && Math.abs(Math.ceil(position)) == position && position !=0) {
        this.res.splice(position-1, 1)
        return this
      }
    else {
      this.res = []
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.res.reverse();
    return this
  },
  finishChain() {
    let arr = this.res
    this.res = []
    return arr.join('').slice(0,-2);
  }
};


module.exports = {
  chainMaker
};
