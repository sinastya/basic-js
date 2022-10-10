const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j=0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        arr[i+1][j] = 0
      }
    }
  }
  const res = arr.map(subarr => subarr.reduce((a, b) => a+b)).reduce((a, b) => a+b)
  return res
}

module.exports = {
  getMatrixElementsSum
};
