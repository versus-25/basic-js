const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) return false;
  let teamName = '';
  let teamNameUnsorted = '';
  for (let x = 0; x < members.length; x++) {
    let member = members[x];
    if (typeof(member) === 'string') {
      teamName += member.trim()[0].toUpperCase();
    };
  };
  return teamName.split('').sort().join('');
};
