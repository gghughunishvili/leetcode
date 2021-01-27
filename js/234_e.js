/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let p = head;
    let n = 0;
    
    while (p) {
        n++;
        p = p.next;
    }

    // We know length
    if (n <= 1) {
        return true;
    }
    
    if (n === 2) {
        return head.val === head.next.val;
    }
    
    const middle = ~~(n/2);
    
    let p2 = head;
    
    let i=1;
    let next = null;
    let prev = null;
    //   prev  p2
    // <-1     2 -> 3
    while (i <= middle) {
        next = p2.next;
        p2.next = prev;
        prev = p2;
        p2 = next;
        i++;
    }
    
    if (n%2 === 1) {
        p2 = p2.next;
    }
    
    while (prev) {
        if (prev.val !== p2.val) {
            return false;
        }
        prev = prev.next;
        p2 = p2.next;
    }
    
    return true;
    
};
