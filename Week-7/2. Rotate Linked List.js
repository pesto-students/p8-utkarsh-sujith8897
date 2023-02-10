// Time: O(n), Space: O(1)
function rotate(head, k) {
  if (!head || !head.next) return head;
  let n = 1;
  let temp = head;
  while (temp.next) {
    n += 1;
    temp = temp.next;
  }
  temp.next = head;
  temp = head;
  k = k >= n ? k % n : k;
  for (let i = 0; i < n - k - 1; i++) {
    temp = temp.next;
  }
  head = temp.next;
  temp.next = null;

  return head;
}

// leetcode: https://leetcode.com/problems/rotate-list/
