const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = 1;
  for (let x = 2; x <= disksNumber; x++) {
    result = result * 2 + 1
  };
  return {turns: result, seconds: Math.floor( 60 * 60 * result/turnsSpeed )};
};
