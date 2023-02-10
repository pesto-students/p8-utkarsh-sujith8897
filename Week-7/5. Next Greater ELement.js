// Time: O(n), Space: O(n)
function NextGreaterElement(nums1, nums2) {
  let match = {};
  let stack = [];
  stack.push(0);
  match[nums2[0]] = 0;
  for (let i = 1; i < nums2.length; i++) {
    match[nums2[i]] = i;
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      nums2[stack[stack.length - 1]] = nums2[i];
      stack.pop();
    }
    stack.push(i);
  }
  while (stack.length) {
    nums2[stack[stack.length - 1]] = -1;
    stack.pop();
  }
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans.push(nums2[match[nums1[i]]]);
  }
  return ans;
}

// leetcode: https://leetcode.com/problems/next-greater-element-i/
