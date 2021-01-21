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
