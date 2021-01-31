/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    
    let curr = 0;
    let nextMinIndex = len-1;
    for (let i=len-1; i>=0; i--) {
        if (nums[i] < curr) {
            nextMinIndex = i;
            curr = nums[i];
            break;
        }
        
        curr = nums[i];
    }
    
    // Case when we are already in the last permutation
    if (nextMinIndex === len - 1) {
        return nums.sort((a, b) => a-b);
    }
    
    let j = len - 1;
    
    while (nums[j] <= curr) {
        j--;
    }

    swap(nextMinIndex, j, nums);
    
    const numChanges = ~~((len - nextMinIndex - 1)/2);
    
    for (let i=1; i<=numChanges; i++) {
        swap(nextMinIndex+i, len - i, nums);
    }

    return nums;
};


var swap = function(i, j, arr) {
  const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
