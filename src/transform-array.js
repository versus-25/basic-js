const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!arr.length) return [];
  let resArr = [];
  let disItem = -1;
  for (let x = 0; x < arr.length; x++) {
    let item = arr[x];
    if (item === '--discard-prev') {
      if (x == 0 || disItem === x - 1) continue;
      resArr.pop();
      continue;
    } else if (item === '--double-prev') {
      if (x == 0 || disItem === x - 1) continue;
      resArr.push(resArr[resArr.length - 1]);
      continue;
    } else if (item === '--double-next') {
      if (x == arr.length - 1) break;
      resArr.push(arr[x + 1]);
      continue;
    } else if (item === '--discard-next') {
      if (x == arr.length - 1) break;
      disItem = x + 1;
      x += 1;
    } else if (x < arr.length) resArr.push(arr[x]);
  }
  return resArr;
};
