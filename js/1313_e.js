/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let i=0;
    const len = nums.length;
    const answer = [];
    while (i<len) {
        let j = 0;
        while (j < nums[i]) {
            answer.push(nums[i+1]);
            j++;
        }
        i += 2;
    }
    return answer;
};
