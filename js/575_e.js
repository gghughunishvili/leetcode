/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const allowedLength = candyType.length/2;
    const hm = {};
    
    let count = 0;
    
    let i = 0;
    while (count < allowedLength && i < candyType.length) {
        if (!hm[candyType[i]]) {
            hm[candyType[i]] = true;
            count++;
        }
        i++;
    }
    
    
    return count;
};
