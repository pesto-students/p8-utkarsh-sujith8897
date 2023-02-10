// Time: O(n), Space: O(1)
function reverse(head) {
  let prev = null,
    next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// leetcode: https://leetcode.com/problems/reverse-linked-list/
