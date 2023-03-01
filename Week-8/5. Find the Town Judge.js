var findJudge = function (n, trust) {
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(0);
  }
  for (const t of trust) {
    graph[t[0] - 1] = -1;
    if (graph[t[1] - 1] != -1) {
      graph[t[1] - 1] += 1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (graph[i] === n - 1) return i + 1;
  }
  return -1;
};

// https://leetcode.com/problems/find-the-town-judge/
