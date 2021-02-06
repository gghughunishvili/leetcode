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

var coveredLevel = 0;
var rightSideView = function(root) {
    if (root == null) {
        return [];
    }
    
    const ans = [root.val];
    updateAns(root, ans, 0);
    // For multiple function rightSideView calls
    coveredLevel = 0;
    return ans;
};

var updateAns = function(root, ans, lvl) {
    if (root === null) {
        return;
    }
    
    if (lvl > coveredLevel) {
        coveredLevel = lvl;
        ans.push(root.val);
    }

    updateAns(root.right, ans, lvl+1);
    updateAns(root.left, ans, lvl+1);
}






