/**
 * Another approach:
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @see https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4501/
 * 1. Create two pointers, one for each iterable. Each pointer should start at the first index.
 * 2. Use a while loop until one of the pointers reaches the end of its iterable.
 * 3. At each iteration of the loop, move the pointers forwards. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem we are trying to solve.
 * 4. Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted.
 * @example
 * function fn(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    // Do some logic here depending on the problem
    // Do some more logic here to decide on one of the following:
    // 1. i++
    // 2. j++
    // 3. Both i++ and j++
    i++;
    j++;
  }

  // Step 4: make sure both iterables are exhausted
  while (i < arr1.length) {
    // Do some logic here depending on the problem
    i++;
  }

  while (j < arr2.length) {
    // Do some logic here depending on the problem
    j++;
  }
}
 */

// Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.

const arrOne = [1, 4, 7, 20];
const arrTwo = [3, 5, 6];

/**
 * @param {number[]} arrA
 * @param {number[]} arrB
 */
export const combineArrays = (arrA, arrB) => {
  const ret = [];

  let i = 0;
  let j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      ret.push(arrA[i]);
      i++;
    } else {
      ret.push(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    ret.push(arrA[i]);
    i++;
  }

  while (j < arrB.length) {
    ret.push(arrB[j]);
    j++;
  }

  return ret;
};

// console.log(combineArrays(arrOne, arrTwo));
