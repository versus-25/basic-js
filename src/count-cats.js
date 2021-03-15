const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCat = 0;
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    for (let y = 0; y < row.length; y++) {
      if (row[y] === '^^') countCat += 1;
    }
  }
  return countCat;
};
