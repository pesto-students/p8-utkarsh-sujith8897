var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;

  // when going to left change right value i.e max
  const left = isValidBST(root.left, min, root.val);

  // when going to right change left value i.e min
  return left && isValidBST(root.right, root.val, max);
};

// https://leetcode.com/problems/validate-binary-search-tree/
