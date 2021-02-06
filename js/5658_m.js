/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    }

    const sumArr = new Array(len).fill(0);
    
    sumArr[0] = nums[0];
    for (let i=1; i<len; i++) {
        sumArr[i] = sumArr[i-1] + nums[i];
    }
    
    // find the min index
    let minVal = sumArr[0];
    let minIndex = 0;
    let maxVal = sumArr[0];
    let maxIndex = 0;
    for (let i=0; i<len; i++) {
        if (sumArr[i] < minVal) {
            minVal = sumArr[i];
            minIndex = i;
        }
        
        if (sumArr[i] > maxVal) {
            maxVal = sumArr[i];
            minIndex = i;
        }
    }
    
    
    // Check backwards which sum is max
    let min = minVal;
    for (let i=minIndex; i>=0; i--) {
        if (minVal - sumArr[i] < min) {
            min = minVal - sumArr[i];
        }
    }
    
    let max = maxVal;
    for (let i=maxIndex; i>=0; i--) {
        if (maxVal - sumArr[i] > max) {
            max = maxVal - sumArr[i];
        }
    }
    
    return Math.max(-min, max);
};
