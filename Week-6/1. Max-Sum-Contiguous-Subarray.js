function MaxSumConArray(arr) {
  if (arr.length === 0) return 0;
  let maxSum = -Infinity,
    maxStart = 0,
    maxEnd = 0,
    sum = arr[0],
    start = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > sum + arr[i]) {
      start = i;
    }
    sum = Math.max(arr[i], sum + arr[i]);
    if (sum > maxSum) {
      maxStart = start;
      maxEnd = i;
      maxSum = sum;
    }
  }
  console.log(arr.slice(maxStart, maxEnd + 1), maxSum);
}

const arr = [1, 2, 3, 4, -10];
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [-2, -3, -1, 0, -2, -2];
MaxSumConArray(arr);
MaxSumConArray(arr1);
MaxSumConArray(arr2);
