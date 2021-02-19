/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let ans = '';
    // will be consist of index and character [i, c];
    let stack = [];
    
    for (let i=0; i<s.length; i++) {
        let stackLen = stack.length;
        if (s[i] === ')' && stackLen !== 0 && stack[stackLen-1][1] === '(') {
            stack.pop();
            continue;
        }
        
        if (s[i] === '(' || s[i] === ')') {
            stack.push([i, s[i]]);
        }
    }
    
    let ignoreIterator = 0;
    
    for (let i=0; i<s.length; i++) {
        if (stack[ignoreIterator] && stack[ignoreIterator][0] === i) {
            ignoreIterator++;
            continue;
        }
        ans += s[i];
    }
    
    return ans;
};
