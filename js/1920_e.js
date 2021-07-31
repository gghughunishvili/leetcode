/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const nums2 = [];
    
    for (let n of nums) {
        nums2.push(nums[n]);
    }
    
    
    return nums2;
};
