/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLenOfList(headA);
    let lenB = getLenOfList(headB);
    
    let pointerA = moveListBySteps(lenA - lenB, headA);
    let pointerB = moveListBySteps(lenB - lenA, headB);

    while (pointerA && pointerB) {
        if (pointerA === pointerB) {
            return pointerA;
        }
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }
    return null;
};
    
var getLenOfList = function(listHead) {
    let p = listHead
    let count = 0;
    while (p) {
        count++;
        p = p.next;
    }
    return count;
}

var moveListBySteps = function(step, listHead) {
    let p = listHead
    while (step > 0) {
        step--;
        p = p.next;
    }
    return p;
}
