/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let answer = 0;
    for (const n of nums) {
        if (n.toString().length % 2 === 0 ) {
            answer++;
        }
    }
    return answer;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers2 = function(nums) {
    let answer = 0;
    
    for (const n of nums) {
        
        if (getLengthOfDigits(n) % 2 === 0) {
            answer++;
        }
        
    }
    
    return answer;
};

var getLengthOfDigits = function(n) {
    let count = 0;
    
    while (n != 0) {
        n = Math.floor(n/10);
        count++;
    }
    
    return count;
}
