/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const foundIndexes = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === c) {
            foundIndexes.push(i);
        }
    }
    
    const answer = [];
    let currIndex = 0;
    let nextIndexVal;
    for (let i=0; i<s.length; i++) {
        if (!foundIndexes[currIndex+1]) {
            nextIndexVal = 100000;
        } else {
            nextIndexVal = foundIndexes[currIndex+1];
        }
        
        let currIndexVal = foundIndexes[currIndex];
        if (Math.abs(currIndexVal-i) < Math.abs(nextIndexVal-i)) {
            answer.push(Math.abs(currIndexVal-i));
        } else {
            currIndex++;
            answer.push(Math.abs(nextIndexVal-i));
        }
    }
    
    return answer;
};
