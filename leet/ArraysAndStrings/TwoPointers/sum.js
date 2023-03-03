// import pkg from '../../../package.json' assert {type: 'json'}
// const nums = [1, 2, 4, 6, 8, 9, 14, 15];
/**
 * @param {number[]} arr
 * @param {number} target
 */
export const sum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const curr = arr[left] + arr[right];
    if (curr === target) {
      return true;
    }
    if (curr > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

// console.log(sum(nums, 13));
