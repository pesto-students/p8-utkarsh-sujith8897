var levelOrder = function (root) {
  let ans = [];
  if (!root) return ans;
  let arr = [root];
  while (arr.length > 0) {
    let n = arr.length;
    const k = [];
    while (n) {
      const node = arr.shift();
      k.push(node.val);
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
      n--;
    }
    ans.push(k);
  }
  return ans;
};

// https://leetcode.com/problems/binary-tree-level-order-traversal/
