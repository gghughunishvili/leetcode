/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const hm = {};
    recursiveTraversal(root, hm, 0);
    const answer = [];
    
    for (let key of Object.keys(hm)) {
        answer.push(hm[key]['sum']/hm[key]['count']);
    }
    
    return answer;
};

var recursiveTraversal = function(root, hm, lvl) {
    if (!root) {
        return;
    }
    
    if (!hm[lvl]) {
        hm[lvl] = {sum: 0, count: 0};
    }
    hm[lvl]['sum'] += root.val;
    hm[lvl]['count']++;
    
    recursiveTraversal(root.left, hm, lvl+1);
    recursiveTraversal(root.right, hm, lvl+1);
}
