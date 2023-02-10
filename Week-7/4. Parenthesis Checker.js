// Time: O(n), Space: O(n)
function ParenthesisChecker(s) {
  let arr = [];
  let match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      if (arr.length && arr[arr.length - 1] === match[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0;
}

// leetcode: https://leetcode.com/problems/valid-parentheses/
