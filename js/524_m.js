/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let maxWord = '';
    d.sort();
    for (const word of d) {
        if (maxWord.length >= word.length) {
            continue;
        }
        
        let currentIndex = 0;
        
        for (const c of s) {
            if (c === word[currentIndex]) {
                currentIndex++;
            }

            if (currentIndex === word.length) {
                maxWord = word;
                // found it
                break;
            }
        }
    }
    
    return maxWord;
};
