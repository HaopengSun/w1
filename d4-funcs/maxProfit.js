const stock = [45, 24, 35, 31, 40, 38, 11];
const maxProfit = function(arr){
  let allCondition = [];
  while(arr.length > 1){
    const buy = arr.shift();
    const profit = arr.map(sell => -(buy - sell));
    const max = Math.max(...profit);
    allCondition.push(max);
  }
  return Math.max(...allCondition);
}
console.log(maxProfit(stock));