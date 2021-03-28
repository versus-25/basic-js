const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  // constructor(arrArrays) {
  //   //   this.arrArrays = arrArrays;
  //   this.depth = 0;
  //   this.counter = 0;
  // }
  // calculateDepth(arr) {
  //   for (let x = 0; x < arr.length; x++) {
  //     if (Array.isArray(arr[x])) {
  //       this.counter++;
  //       if (this.depth < this.counter) this.depth = this.counter;
  //       // this.depth += this.counter;
  //       // this.counter = 0;
  //       this.calculateDepth(arr[x]);
  //     }
  //   }

  //   return this.depth + 1;
  // }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(this.calculateDepth.bind(this)));
    } else {
      return 0
    }
  }
};
