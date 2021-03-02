/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dup;
    let missing;
    for (let n of nums) {
        if (nums[Math.abs(n)-1] < 0) {
            dup = Math.abs(n);
        } else {
            nums[Math.abs(n)-1] *= -1;
        }
    }
    
    for (let i=1; i<=nums.length; i++) {
        if (nums[i-1] > 0) {
            missing = i;
            break;
        }
    }
    
    return [dup, missing];
};
