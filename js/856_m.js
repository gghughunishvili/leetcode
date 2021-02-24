/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
    let score = 0;
    const stack = [];
    
    for (let c of S) {
        if (c === ')') {
            score = stack.pop() + Math.max(2*score, 1);
        } else {
            stack.push(score);
            score = 0;
        }
        
    }
    
    return score;
};
