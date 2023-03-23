function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

const arr1 = [1, 2, 3, 4, 5, 1];
const arr2 = [1, 2, 3, 4];
console.log(hasDuplicate(arr1)); // true
console.log(hasDuplicate(arr2)); // false
