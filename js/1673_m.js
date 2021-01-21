/*
Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.

We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
    const ans = [];
    
    let endIndex = nums.length - k;
    let startIndex = 0;
    while (k !== 0) {
        let localMin = Number.MAX_SAFE_INTEGER;
        let localMinIndex = Number.MAX_SAFE_INTEGER;
        for (let i=startIndex; i<=endIndex; i++) {
            if (nums[i] < localMin) {
                localMin = nums[i];
                localMinIndex = i;
            }
        }
        startIndex = localMinIndex + 1;
        endIndex++;
        ans.push(localMin);
        k--;
    }
    
    return ans;
};
