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
