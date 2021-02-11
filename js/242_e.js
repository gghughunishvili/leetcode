/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sHashMap = {};
    const tHashMap = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    setFrequencies(sHashMap, s);
    setFrequencies(tHashMap, t);
    
    if (Object.keys(sHashMap).length !== Object.keys(tHashMap).length) {
        return false;
    }
    
    for (let k of Object.keys(sHashMap)) {
        if (!tHashMap[k] || tHashMap[k] !== sHashMap[k]) {
            return false;
        }
    }
    
    return true;
};

function setFrequencies(hm, str) {
    for (let c of str) {
        if (hm[c]) {
            hm[c]++;
        } else {
            hm[c] = 1;
        }
    }
}
