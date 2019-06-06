

function getMaxProfit(stockPrices){
  if (stockPrices.length < 2){
    return null;
  }
  let maxProfit = stockPrices[1] - stockPrices[0];
  let minPrice = Math.min(stockPrices[1], stockPrices[0]);
  for(let i = 2; i < stockPrices.length; i++){
    let currPrice = stockPrices[i];
    maxProfit = Math.max(maxProfit, currPrice - minPrice)
    minPrice = Math.min(minPrice, currPrice)
    // if (currPrice - min > maxProfit) maxProfit = currPrice - min;
    // if (currPrice < min) min = currPrice;
  }
  return maxProfit;
} 







const stockPrices = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stockPrices));


