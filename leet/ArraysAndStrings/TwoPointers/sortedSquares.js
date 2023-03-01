/**
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in
 * non-decreasing order.
 *
 * @example
 *     squaresSortedArray([-4, -1, 0, 3, 10]); // [0,1,9,16,100]
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
export const sortedSquares = (nums) => {
    const ret = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let idx = nums.length - 1;

    // Continue while the left pointer is less than or equal to the right pointer

    while (left <= right) {
        const absLeft = Math.abs(nums[left]);
        const absRight = Math.abs(nums[right]);
        if (absLeft > absRight) {
            ret[idx] = nums[left] ** 2;
            left++;
        } else {
            ret[idx] = nums[right] ** 2;
            right--;
        }
        idx--;
    }

    return ret;
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]));
