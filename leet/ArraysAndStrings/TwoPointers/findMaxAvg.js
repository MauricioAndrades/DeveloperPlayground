/* eslint-disable prefer-const */
/**
 * You are given an integer array `nums` consisting of `n` elements, and an
 * integer `k`. Find a contiguous subarray whose length is equal to `k` that has
 * the maximum average value and return this value. Any answer with a
 * calculation error less than 10-5 will be accepted.
 *
 * @example
 *   findMaxAverage([1, 12, -5, -6, 50, 3], 4); // 12.75000
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export const findMaxAvg = (nums, k) => {
  let left = 0;
  let right = k - 1;
  let sum = nums.slice(0, k).reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  let maxSum = sum;

  // Step 3: Use two pointers to slide a window of size k through the array

  while (right < nums.length - 1) {
    // remove the left element from the sum
    sum -= nums[left];
    // move the left pointer to the right
    left++;
    right++;
    // add the right element to the sum
    sum += nums[right];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export const findMaxAvgIter = (nums, k) => {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAvg = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i];
    sum -= nums[i - k];

    maxAvg = Math.max(maxAvg, sum / k);
  }

  return maxAvg;
};
