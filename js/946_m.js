/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    
    let i=0, j=0;
    
    while (i<pushed.length) {
        stack.push(pushed[i]);
        if (pushed[i] === popped[j]) {
            while (arrPeek(stack) === popped[j] && j < popped.length) {
                stack.pop();
                j++;
            }
        }
        i++;
    }

    return stack.length === 0;
};
        
var arrPeek = function(arr) {
    const len = arr.length;
    if (len === 0) {
        return undefined;
    }
    return arr[len-1];
}
