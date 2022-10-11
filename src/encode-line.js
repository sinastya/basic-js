const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let res = [];
  let counter = 1;
  let letter = '';
  
  arr.forEach((el, i) => {
    letter = el;
    if (el == arr[i+1]) {
      counter ++;
    } else {
      if (counter != 1) {
        res.push(counter)
      }
      res.push(letter)
      counter = 1;
      letter = '';
    }
  })
  
  return res.join('')
}


module.exports = {
  encodeLine
};
