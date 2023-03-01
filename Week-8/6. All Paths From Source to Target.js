var allPathsSourceTarget = function (graph) {
  let ans = [];
  let k = [];
  helper(graph, ans, 0, k);
  return ans;
};

var helper = function (graph, ans, s, k) {
  k.push(s);
  if (s === graph.length - 1) return ans.push(k);
  for (let i = 0; i < graph[s].length; i++) {
    helper(graph, ans, graph[s][i], [...k]);
  }
};

// https://leetcode.com/problems/all-paths-from-source-to-target/
