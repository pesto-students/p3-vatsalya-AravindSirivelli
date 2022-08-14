//Problem
//Best time to buy and sell stockYou are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.
//Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 
//Example 2: Input: prices =[7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the maxprofit = 0 Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104

const maxProfit = (prices) => {
    let bestprofit = 0;
    if (prices.length === 0) return bestprofit;
    const bestBuyValue = Math.min(...prices);
    const bestBuyDay = prices.indexOf(bestBuyValue);
    for (let i = bestBuyDay; i < prices.length; i++) {
        let currentprofit = prices[i] - bestBuyValue;
        if (bestprofit < currentprofit) {
            bestprofit = currentprofit;
        }
    }
    return bestprofit;
}


maxProfit([11, 2, 20, 6, 5]);  //result = 18


maxProfit([1, 22, 20, 16, 5]);  //result = 21


maxProfit([1, 22, 20, 16, 0.5]);  //result = 0