const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = []
  const control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  if (Array.isArray(arr)) {
    arr.forEach((el, i) => {
      if (control.indexOf(el) == 2) {
        if (arr[i + 1]) { res.push(arr[i + 1]) }
      } else if (control.indexOf(el) == 3) {
        if (arr[i - 1]) { 
          res.push(arr[i - 1]);
          if (control.indexOf(arr[i - 2]) == 0) {
            res.pop()
          }
        }
      } else if (control.indexOf(el) == 1) {
        if (arr[i - 1]) {
          res.pop();
          if (control.indexOf(arr[i - 2]) == 0) {
            res.push(arr[i - 3])
          }
        }
      } else {
        if (control.indexOf(arr[i - 1]) != 0) {
          res.push(el)
        } else {
          res.pop()
        }
      }
    })
    return (res[res.length -1] != control[0]) ? res : res.slice(0, res.length-1)
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
