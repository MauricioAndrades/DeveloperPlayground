const s = "ace";
const t = "abcde";

/**
 * Given two strings s and t, return true if s is a subsequence of t, or false
 * otherwise. A subsequence of a string is a new string that is formed from the
 * original string by deleting some (can be none) of the characters without
 * disturbing the relative positions of the remaining characters. (i.e., "ace"
 * is a subsequence of "abcde" while "aec" is not).
 *
 * @example
 *   isSubSequence("abcde", "ace"); // true
 *
 * @param {string} str
 * @param {string} check
 */
export const isSubSequence = (str, check) => {
  let i = 0;
  let j = 0;

  while (i < str.length && j < check.length) {
    if (str[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === str.length;
};

// console.log(isSubSequence(s,t));
