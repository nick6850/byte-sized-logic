// Last updated: 2/21/2026, 3:07:56 PM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let left = 0;  // buy
7    let right = 1; // sell
8    let maxProfit = 0;
9
10    while (right < prices.length) {
11        if (prices[right] > prices[left]) {
12            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
13        } else {
14            left = right; // found a new minimum, move buy pointer
15        }
16        right++;
17    }
18
19    return maxProfit;
20};