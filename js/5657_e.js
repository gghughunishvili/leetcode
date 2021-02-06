/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map();
    let sum = 0;
    
    for (let n of nums) {
        if (map.has(n)) {
            if (map.get(n) !== 0) {
                sum -= n;
            }
            map.set(n, 0);
        } else {
            sum += n;
            map.set(n, 1);
        }
    }
    
    return sum;
};
