// time: O(n^2), space: O(1)
function ThreeSum(arr, t) {
  let closestSum = Infinity,
    ans = 0;
  arr.sort();
  for (let i = 0; i < arr.length - 2; i++) {
    let p = arr[i],
      l = i + 1,
      h = arr.length - 1;
    while (l < h) {
      let s = p + arr[l] + arr[h];
      let v = Math.abs(s - t);
      if (v < closestSum) {
        closestSum = v;
        ans = s;
      }
      if (s > t) {
        h -= 1;
      } else {
        l += 1;
      }
    }
  }
  return ans;
}

const arr = [-1, 2, 1, -4];
const t = 1;
console.log(ThreeSum(arr, t)); // 2
