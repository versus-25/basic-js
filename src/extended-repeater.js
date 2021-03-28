const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repTimes = options.repeatTimes ? options.repeatTimes : 0, 
  sep = options.separator ? options.separator : '+', 
  add = options.addition || 
    options.addition === false || 
    options.addition === null ? 
    String(options.addition) : '', 
  addRepTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 0, 
  addSep = options.additionSeparator ? options.additionSeparator : '|',
  baseStr = String(str);

  let baseAdd = addRepTimes === 0 ? 
    add : 
    Array(addRepTimes).fill(add, 0, addRepTimes).join(addSep);
  let resStr = Array(repTimes).fill(baseStr + baseAdd, 0, repTimes).join(sep);
  return resStr ? resStr : baseStr + baseAdd;
};
  