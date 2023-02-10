// Time: O(n), Space: O(n)
function MyQueue() {
  this.stack = [];
}

MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

MyQueue.prototype.pop = function () {
  if (!this.stack.length) return -1;
  let tempStack = [];
  while (this.stack.length) {
    tempStack.push(this.stack.pop());
  }
  let val = tempStack.pop();
  while (tempStack.length) {
    this.stack.push(tempStack.pop());
  }
  return val;
};

MyQueue.prototype.peek = function () {
  return this.stack[0] || -1;
};

MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

// leetcode: https://leetcode.com/problems/implement-queue-using-stacks/
