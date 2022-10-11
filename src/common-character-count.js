const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr2 = s2.split('');
  let ind = [];
  let res = s1.split('').filter(letter1 => {
    for (let i=0; i<arr2.length; i++) {
        if (letter1 == arr2[i] & !ind.includes(i)) {
          ind.push(i)
          return letter1
        }
      }
    })
  return res.length
}


module.exports = {
  getCommonCharacterCount
};
