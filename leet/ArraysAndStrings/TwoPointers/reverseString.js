/**
 * @param {string[]} s
 * @returns {string[]}
 */
export const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;

    left++;
    right--;
  }

  return s;
};

// console.log(reverseString(input));
