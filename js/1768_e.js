/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    
    const iteration = Math.max(len1, len2);
    
    let charsArray = [];
    for (let i=0; i<iteration; i++) {
        if (word1[i]) {
            charsArray.push(word1[i]);
        }
        
        if (word2[i]) {
            charsArray.push(word2[i]);
        }
    }
    
    return charsArray.join('');
};
