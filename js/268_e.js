/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    const n = nums.length;
    for (let num of nums) {
        sum += num;
    }
    return n*(n+1)/2 - sum;
};
