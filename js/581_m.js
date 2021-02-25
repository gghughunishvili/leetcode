/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let l = 0;
    let r = nums.length-1;
    let sortedNums = [...nums].sort((a, b) => a-b );
    
    while (l<r) {
        if (sortedNums[l] !== nums[l]) {
            break;
        }
        l++;
    }
    
    while (l<r) {
        if (sortedNums[r] !== nums[r]) {
            break;
        }
        r--;
    }
    
    if (r === l) {
        return 0;
    }
    
    return r - l + 1;
    
};
