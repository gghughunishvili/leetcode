/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;
    for (let num of nums) {
        if (num === 1) {
            current++;
        } else {
            max = Math.max(max, current);
            current = 0;
        }
    }
    max = Math.max(max, current);
    
    return max;
};
