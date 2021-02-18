/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let ans = 0;
    
    while (head) {
        let bit = head.val;
        ans <<= 1;
        ans |= bit;
        head = head.next;
    }
    
    return ans;
    
};
