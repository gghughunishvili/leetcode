/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let i = 0;
    const len = s.length;
    
    const arr = [];
    
    while (i < len) {
        let currDigit = Number(s[i]);
        if (currDigit <= 2 && i+2 < len && s[i+2] === '#') {
            arr.push(Number(s[i] + s[i+1]));
            i += 3;
            continue;
        }
        arr.push(currDigit);
        i++;
    }
    
    const aCharCode = 'a'.charCodeAt(0);
    
    let ans = '';
    for (let num of arr) {
        ans += String.fromCharCode(aCharCode + num - 1);
    }
    return ans;
};
