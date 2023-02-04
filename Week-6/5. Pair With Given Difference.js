// time: O(n), space: O(n)
function PairDiff(arr, k) {
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (m[k + arr[i]]) return 1;
  }
  return 0;
}

const arr1 = [5, 10, 3, 2, 50, 80];
const k1 = 78;
console.log(PairDiff(arr1, k1));
const arr2 = [-10, 20];
const k2 = 30;
console.log(PairDiff(arr2, k2));
