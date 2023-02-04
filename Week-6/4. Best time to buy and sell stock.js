function buySell(arr) {
  if (arr.length === 0) return 0;
  let maxProfit = 0,
    buyPrice = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < buyPrice) {
      buyPrice = arr[i];
    } else if (arr[i] - buyPrice > maxProfit) {
      maxProfit = arr[i] - buyPrice;
    }
  }
  return maxProfit;
}

const arr = [7, 1, 5, 3, 6, 4];
console.log(buySell(arr));
