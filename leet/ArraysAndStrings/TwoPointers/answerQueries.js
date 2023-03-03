/**
 * A prefix sum is a technique that can be used with integer arrays. The idea is to create an array `prefix` where
 * `prefix[i]` is the sum of all elements up to the index `i` (inclusive). For example, given `const nums = [5, 2, 1, 6,
 * -3, 8]`, we would have`prefix = [5, 7, 8, 14, 17, 25]`.
 *
 * Prefix sums allow us to find the sum of any subarray in O(1). If we want the sum of the subarray from `i` to `j`
 * (inclusive), then the answer is `prefix[j] - prefix[i - 1]` or `prefix[j] - prefix[i] + nums[i]`.
 *
 * @example
 *     const nums = [5, 2, 1, 6, 3, 8];
 *     answerQueries(nums); // [5, 7, 8, 14, 17, 25]
 *
 * @param {number[]} nums
 */
const answerQueries = (nums) => {
    // Given an integer array nums,
    // prefix = [nums[0]]
    // for i in [1, len(nums) - 1]:
    //    prefix.append(nums[i] + prefix[prefix.length - 1])
};

/**
 * Example 1: Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a
 * boolean array that represents the answer to each query.
 *
 * A query is true if the sum of the subarray from x to y is less than limit.
 *
 * @example
 *     const nums = [1, 6, 3, 2, 7, 2];
 *     const queries = [
 *         [0, 3],
 *         [2, 5],
 *         [2, 4]
 *     ];
 *     const limit = 13;
 *     answerQueriesWithLimits(nums, queries, limit); // [true, false, true];
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @param {number} limit
 * @returns {boolean[]}
 */
var answerQueriesWithLimits = (nums, queries, limit) => {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    const ans = [];
    for (const [i, j] of queries) {
        const curr = prefix[j] - prefix[i] + nums[i];
        ans.push(curr < limit);
    }

    return ans;
};

(() => {
    const nums = [1, 6, 3, 2, 7, 2];
    const queries = [
        [0, 3],
        [2, 5],
        [2, 4]
    ];
    const limit = 13;
    answerQueriesWithLimits(nums, queries, limit); // [true, false, true];
})();

/**
 * Suppose we have an array nums = [5, 2, 1, 6, 3, 8] and we want to find the sum of the subarray from index i=2 to
 * index j=4 (inclusive). We can compute the prefix sum array for nums as prefix = [5, 7, 8, 14, 17, 25]. The sum of the
 * subarray can be computed using the prefix sum array as:
 *
 * I = 2; j = 4; nums = [5, 2, 1, 6, 3, 8] prefix = [5, 7, 8, 14, 17, 25]
 *
 * Sum = prefix[j] - prefix[i-1] = prefix[4] - prefix[1] = 17 - 7 = 10
 */
(() => {
    const nums = [5, 2, 1, 6, 3, 8];
    const prefix = [5, 7, 8, 14, 17, 25];
    const q = [[2, 4]];

    const [i, j] = q[0];

    var sum = prefix[j] - prefix[i - 1];
    sum = prefix[4] - prefix[1];
    sum = 17 - 7;
    sum = 10;
})();
