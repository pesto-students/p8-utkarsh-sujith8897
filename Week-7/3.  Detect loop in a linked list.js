// Time: O(n), Space: O(1)
function detectLoop(head, k) {
  if (!head || !head.next) return false;
  let fast = head.next,
    slow = head;
  while (fast != slow) {
    if (!fast.next || !fast.next.next) return false;
    fast = fast.next.next;
    if (!slow.next) return false;
    slow = slow.next;
  }
  return true;
}

// leetcode: https://leetcode.com/problems/linked-list-cycle/
