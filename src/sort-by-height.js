const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let i = 0;
  let arr1 = [...arr].sort((a, b) => a-b).filter(el => el != -1);
  let arr2 =[]

  arr.forEach(el => {
    if (el != -1) {
      arr2.push(arr1[i])
      i++
    } else {
      arr2.push(-1)
    }
  })
  return arr2
}

module.exports = {
  sortByHeight
};
