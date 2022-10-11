const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = {
    'winter': [0, 1, 11],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'fall': [8, 9, 10],
  }

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  try {
    date.getUTCDay()
  } 
  catch {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  for (let s in seasons) {
    if (seasons[s].some(num => num == month)) {
      return s
    }
  } 
}

module.exports = {
  getSeason
};

// getSeason(() => new Date())