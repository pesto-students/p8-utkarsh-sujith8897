function Sort(arr) {
  let low = 0,
    high = arr.length - 1,
    mid = 0,
    t;
  while (mid <= high) {
    if (arr[mid] === 0) {
      t = arr[low];
      arr[low] = arr[mid];
      arr[mid] = t;
      low += 1;
      mid += 1;
    } else if (arr[mid] === 1) {
      mid += 1;
    } else {
      t = arr[high];
      arr[high] = arr[mid];
      arr[mid] = t;
      high -= 1;
    }
  }
  return arr;
}

const arr = [0, 2, 1, 2, 0];
const arr1 = [0, 1, 0];
const arr2 = [0, 2, 1, 2, 0, 1, 2];
console.log(Sort(arr));
console.log(Sort(arr1));
console.log(Sort(arr2));
