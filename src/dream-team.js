const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;}
  const firstLetters = [];
  for (let i = 0; i < members.length; i++) {
    const item = members[i];
    if (typeof item === 'string') {
      const nameWithoutSpaces = item.trim();
      if (nameWithoutSpaces.length > 0) {
        const firstLetter = nameWithoutSpaces[0].toUpperCase();
        firstLetters.push(firstLetter);
      }}  }
  if (firstLetters.length === 0) {
    return false;  }
  firstLetters.sort();
  return firstLetters.join('');
}

module.exports = {
  createDreamTeam
};
