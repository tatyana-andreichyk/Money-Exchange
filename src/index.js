// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    let coins = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };
    
    
    let quantityOfCoins = {};    
    
    if (currency >= 10000) {
        quantityOfCoins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return quantityOfCoins;
    }
    

    for (let key in coins){
        let countQuantityOfCoins = (currency - currency % coins[key]) / coins[key];
        let remaind = currency % coins[key];
        quantityOfCoins[key] = countQuantityOfCoins;
        currency = remaind;  
    }

    
    for (let key in quantityOfCoins) {
        if (quantityOfCoins[key] <= 0) {
            delete quantityOfCoins[key];
        }
    }

    
    return quantityOfCoins;
}
