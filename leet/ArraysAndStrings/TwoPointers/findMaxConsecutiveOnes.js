/**
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip
 * at most k 0's.
 *
 * USE THE SLIDING WINDOW TECHNIQUE:
 *
 * 1. Left pointer tracks the start of the window.
 * 2. Right pointer iterates through the array and defines the end of the window.
 * 3. Left and right are set to 0, which defines a window of size 1 that contains the first element of the array.
 * 4. As we iterate through the array, we move the right pointer forward by one position with each iteration. This has the
 *    effect of expanding the window to include the next element in the array.
 *
 * @example
 *     findMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2); // 6
 *
 * @param {number[]} nums
 * @param {number} k
 */
export const findMaxConsecutiveOnes = (nums, k) => {
    let maxOnes = 0;
    let zeroCount = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        // If we encounter a 0 while iterating through the array, we increment zeroCount to keep track of the number of zeros encountered so far in the current window.
        if (nums[right] === 0) {
            // keep track of 0 count so you don't exceed k.
            zeroCount++;
        }

        // If zeroCount becomes greater than k, we need to move the left pointer forward until we can flip some 0s to maintain the constraint of at most k flips. Stop when zeroCount is less than or equal to k, meaning that we've removed enough zeros from the current window to satisfy the constraint.
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // update maxOnes if the current window has more 1s than the previous maximum window. max: maxOnes and the difference between right and left plus 1. The plus 1 is necessary because we need to include the current element in the count of consecutive ones.

        // when right = 5 and left = 1; looks like:
        //      right edge -> [1, 1, 1, 0, 0, 0]
        //      left edge ->  [1, 1, 1]
        // but zero count now 3
        maxOnes = Math.max(maxOnes, right - left + 1);

        right++;
    }

    return maxOnes;
};

// console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
