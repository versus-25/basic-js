const CustomError = require('../extensions/custom-error');

const chainMaker = {
  chainList: [],
  getLength() {
    return this.chainList.length;
  },
  addLink(value) {
    this.chainList.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.chainList = [];
      throw new Error();
    }
    this.chainList.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainList.reverse();
    return this;
  },
  finishChain() {
    return this.chainList.splice(0, this.getLength()).join('~~');
  },
};

module.exports = chainMaker;
