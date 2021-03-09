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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    // Case when depth is 1
    if (d === 1) {
        return new TreeNode(v, root);
    }
    
    let currLvl = 1;
    
    addRowRec(root, v, d, currLvl);
    
    return root;
};

var addRowRec = function (root, v, d, currLvl) {
    if (!root) {
        return
    }

    if (d-1 === currLvl) {
        const rootLeft = root.left;
        const rootRight = root.right;
        
        root.left = new TreeNode(v, rootLeft);
        root.right = new TreeNode(v, null, rootRight); 
        return;
    }
    
    addRowRec(root.left, v, d, currLvl+1);
    addRowRec(root.right, v, d, currLvl+1);
};
