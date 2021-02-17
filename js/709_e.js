/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const ans = [];
    for (let c of str) {
        let cCode = c.charCodeAt(0);
        let aCode = 'a'.charCodeAt(0);
        let bigACode = 'A'.charCodeAt(0);
        if (cCode < aCode && cCode >= bigACode) {
            c = String.fromCharCode(cCode + 32);
        }
        ans.push(c);
    }
    return ans.join('');
};
