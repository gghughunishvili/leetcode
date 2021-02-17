/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    
    let max = 0;
    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        max = Math.max(max, area);
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    
    return max;
};
