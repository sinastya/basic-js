const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arr1 = new Array(arr.length).fill(arr);
  const arr2 = arr1.map((a, i) => a.filter((str, ind) => ind != i))
  .map(a => +a.join('')).sort((a, b) => b-a)
  
  return arr2[0]
}

module.exports = {
  deleteDigit
};
