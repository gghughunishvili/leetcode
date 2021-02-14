/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const hm = {};
    for (let c of allowed) {
        hm[c] = true;
    }
    
    let count = 0;
    for (let word of words) {
        let isWordValid = true;
        for (let c of word) {
            if (!hm[c]) {
                isWordValid = false;
            }
        }
        
        count += isWordValid ? 1 : 0;
    }
    
    return count;
};
