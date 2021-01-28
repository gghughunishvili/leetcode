/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    let currentCount = n;
    const resArray = new Array(n).fill('a');
    
    let i = n-1;
    while (currentCount < k) {
        // TODO:: replace 'a' with current symbol
        let currentDiff = k - currentCount;
        if (currentDiff < 26) {
            resArray[i] = getAssociatedChar(currentDiff + 1);
            currentCount = k;
        } else {
            resArray[i] = 'z';
            currentCount += 25;
        }      
        i--;
    }
    
    return resArray.join("");
};

var getAssociatedChar = function(k) {
    const aVal = 'a'.charCodeAt(0);
    return String.fromCharCode(aVal + k - 1);
};
