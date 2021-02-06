/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    const len = s.length;
    if (len === 1) {
        return 1;
    }

    let l=0;
    let r=len-1;
    
    while(r>l) {
        if (s[r] !== s[l]) {
            break;
        }

        let currentC = s[l];
        while (s[r] === currentC) {
            r--;
        }
        
        while (s[l] === currentC) {
            l++;
        }
    }
    
    return Math.max(0, r-l+1);
};
