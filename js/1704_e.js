var vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
    'A': true,
    'E': true,
    'I': true,
    'O': true,
    'U': true
};

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const len = s.length;
    let count = 0;
    for (let i=0; i<len/2; i++) {
        if (vowels[s[i]]) {
            count++;
        }
        
        if (vowels[s[len-1-i]]) {
            count--;
        }
    }
    
    return count === 0;
};
