/** @typedef {{name: 'foo'}}  SHOE_COLORS */

/**
 * @param {string} s
 * @returns {boolean}
 */
export const checkIfPalendrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (/^\s*$/.test(s[left])) left++;
    if (/^\s*$/.test(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// console.log(checkIfPalendrome('racecar'));
