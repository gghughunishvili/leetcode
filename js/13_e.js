/**
 * @param {string} s
 * @return {number}
 */

var romans = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

var romanToInt = function(s) {
    let sum = 0;
    let len = s.length;
    
    for (let i=0; i<len; i++) {
        sum += romans[s[i]];
        if ((i + 1) < len && romans[s[i]] < romans[s[i+1]]) {
            sum += romans[s[i+1]] - (2 * romans[s[i]]);
            i++;
        }
    }
    return sum;
};
