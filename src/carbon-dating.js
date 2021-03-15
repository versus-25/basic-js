const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //t = (ln(n0/n)) / k
  let n = +sampleActivity
  if (n <= 0 || n > 15 || typeof(n) !== 'number' || isNaN(n) || typeof(sampleActivity) != 'string') {
    return false;
  };
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / n) / k
  return Math.ceil(t)
};
