function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

const arr = [1, 2, 3, 4, 5, 1];
console.log(hasDuplicate(arr));
