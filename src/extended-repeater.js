const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let str1 = String(str);
  let addition = ('addition' in options) ? String(options.addition) : '';
  let arr = new Array((options.additionRepeatTimes-1)||0).fill((addition ||'') + (options.additionSeparator||'|'));
  arr.push(addition||'');
  let string = arr.join('')
  let arr1 = new Array(options.repeatTimes-1 || 0).fill(str1+ (string||'')+(options.separator||'+'));
  arr1.push(str1+ string||'');
  return arr1.join('')
}

module.exports = {
  repeater
};
