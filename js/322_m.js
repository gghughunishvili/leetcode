/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var cache = [];

var coinChange = function(coins, amount) {
    cache = new Array(amount+1);
    cache.fill(amount+1);
    cache[0] = 0;

    let i=1;
    while (i <= amount) {
        for (let c of coins) {
            if (i - c >= 0) {
                cache[i] = Math.min(cache[i], cache[i-c] + 1);
            }
        }
        i++;
    }
    
    return cache[amount] === amount + 1 ? -1 : cache[amount];
};
