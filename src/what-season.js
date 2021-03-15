const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  } else if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error;
  };
  let seasonMapping = [
    'winter', 'winter', 
    'spring', 'spring', 'spring',
    'summer', 'summer', 'summer',
    'autumn', 'autumn', 'autumn',
    'winter'
  ];
  return seasonMapping[date.getMonth()]
};
