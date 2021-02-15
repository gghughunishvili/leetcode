/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0;
    let max = 0;
    
    for (let n of gain) {
        sum += n;
        
        max = Math.max(max, sum);
    }
    
    return max;
};
