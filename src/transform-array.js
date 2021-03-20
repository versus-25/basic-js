const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // if (!Array.isArray()) throw new Error();
  if (!arr.length) return [];
  let resArr = [];
  for (let x = 0; x <= arr.length; x++) {
    let item = arr[x];
    if (item === '--discard-prev' && !!resArr[resArr.length - 1]) {///////////////
      resArr.pop();
      continue;
    } else if (item === '--double-prev' && !!resArr[resArr.length - 1]) {//////////////
      resArr.push(arr[x - 1]);
      continue;
    } else if (item === '--double-next' && !!resArr[resArr.length]) {//////////
      resArr.push(arr[x + 1]);
    } else if (item === '--discard-next' && !!resArr[resArr.length]) {/////////
      x += 1;
      continue;
    };
    if (item !== '--discard-prev' && item !== '--double-prev' && item !== '--double-next' &&item !== '--discard-next') {
      resArr.push(item)
    };
  };
  return resArr
};
['--discard-prev', 1, 2, 3],
['--double-prev', 1, 2, 3],
[1, 2, 3, '--double-next'],
[1, 2, 3, '--discard-next']
