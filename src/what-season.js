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

  
  // (typeof(date) != 'object' || typeof date.valueOf() != 'number' || !(date instanceof Date))
  // (!date.getTime())
    try {
      date.getUTCDay()

      const month = date.getMonth();
      for (let s in seasons) {
        if (seasons[s].some(num => num == month)) {
          return s
          // console.log(s)
        }
      }
    }
    catch (e) {
      if (!date) {
        // console.log('Unable to determine the time of year!')
        // console.log(e.name)
        // console.log(e.message)

        throw new NotImplementedError('Unable to determine the time of year!');
      }
      // else if (!date.getMonth()) {
      //   console.log('Invalid date!')
      //   console.log(e.name)
      //   console.log(e.message)
      // }
      else {
        // console.log('Invalid date!')
        // console.log(e.name)
        // console.log(e.message)
        throw new NotImplementedError('Invalid date!');
    }
  }
}

module.exports = {
  getSeason
};

// getSeason(() => new Date())