/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const hm = {};
    
    for (let n of nums) {
        if (!hm[n]) {
            hm[n] = 0;
        }
        hm[n]++;
    }
    
    const keys = Object.keys(hm).sort((a,b) => (+a)-(+b));
    const len = keys.length;
    let maxNum = 0;
    for (let i=0; i<len-1; i++) {
        if ((+keys[i+1] - (+keys[i])) === 1) {
            const total = (+hm[keys[i]]) + (+hm[keys[i+1]]);
            if (total > maxNum) {
                maxNum = total;
            }
        }
    }
    
    return maxNum;
};
