/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let np = -1, pp = -1; // Negative and Positive pointers;
    const len = nums.length;
    const answer = [];

    for (let i=0; i<len; i++) {
        if (nums[i] >= 0) {
            pp = i;
            break;
        }
    }
    
    for (let i=len; i>=0; i--) {
        if (nums[i] < 0) {
            np = i;
            break;
        }
    }


    // If one of them doesn't exist then just return plain squares
    if (np === -1) {
        return nums.map(n => n**2);
    }
    
    if (pp === -1) {
        return nums.map((_, i) => nums[len-i-1]**2);
    }
    
    // Case when we have negative numbers
    while (np >= 0 && nums[np] < 0) {
        if (pp < len) {
            let neg = nums[np]**2;
            let pos = nums[pp]**2;

            
            if (neg < pos) {
                answer.push(neg);
                np--;
            } else {
                answer.push(pos);
                pp++;
            }
            
        } else {
            answer.push(nums[np]**2);
            np--;
        }
    }
    
    while (pp < len) {
        answer.push(nums[pp]**2);
        pp++;
    } 
    
    
    return answer;
};
