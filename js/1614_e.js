/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let count = 0;
    const stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === ')') {
            max = Math.max(max, count);
            count--;
            stack.pop();
        }
        
        if (s[i] === '(') {
            count++;
            stack.push('(');
        }
    }
    
    return max;
};
