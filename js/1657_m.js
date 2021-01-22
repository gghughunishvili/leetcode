/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const map1 = new Map();
    const map2 = new Map();
    
    for (const c1 of word1) {
        if (!map1.has(c1)) {
            map1.set(c1, 1);
        }
        map1.set(c1, map1.get(c1)+1);
    }
    
    for (const c2 of word2) {
        if (!map2.has(c2)) {
            map2.set(c2, 1);
        }
        map2.set(c2, map2.get(c2)+1);
    }
    
    // Check if all chars are presented
    const keys1 = Array.from(map1.keys()).sort();
    const keys2 = Array.from(map2.keys()).sort();
    
    if (keys1.join('') !== keys2.join('')) {
        return false;
    }

    // Check sorted statistic are same
    const val1 = Array.from(map1.values()).sort((a, b) => a - b);
    const val2 = Array.from(map2.values()).sort((a, b) => a - b);
    
    if (val1.join('') !== val2.join('')) {
        return false;
    }
    
    return true;
};
