/* eslint-disable prefer-const */
/**
 * Given an array of integers nums and an integer target,
 * return indices of two numbers such that they add up to target.
 * You cannot use the same index twice.
 *
 * the solution looks like:
 *  target - nums[i] -> rem -> Map<{nums[i]:i}>

 * @param {number[]} nums
 * @param {number} target
 * @example
 *
 * twoSum([5,2,7,10,3,9], 8);
 * // [0]: 8-5 => 3 -> 5:0
 * // [1]: 8-2 => 6 -> 2:1
 * // [2]: 8-7 => 1 -> 7:2
 * // [3]: 8-10 => -2 -> 10:3
 * // [4]: 8-3 => 5 ->  0:4
 * // [5]: 8-9 => -1 -> 9:5
 */
export const twoSum = (nums,target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        if (map.has(rem)) {
            return [i, map.get(rem)]
        }
        map.set(nums[i], i)
    }

    return [-1,-1];
}

console.log(twoSum([5,2,7,10,3,9], 8));