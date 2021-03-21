const StatValue = require('./StatValue')
class Currencies {
    constructor(
        credits = new StatValue,
        blackMarketItems = new StatValue,
        gems = new StatValue,
        gold = new StatValue,
        tradableItems = new StatValue
    ) {
        this.credits = credits;
        this.blackMarketItems = blackMarketItems;
        this.gems = gems;
        this.gold = gold;
        this.tradableItems = tradableItems;
    }

    getCredits() {
        return this.credits;
    }

    getBlackMarketItems() {
        return this.blackMarketItems;
    }

    getGems() {
        return this.gems;
    }

    getGold() {
        return this.gold;
    }

    getTradableItems() {
        return this.tradableItems;
    }

    getTotalCurrencies() {
        return (this.credits + this.blackMarketItems + this.gems + this.gold + this.tradableItems)
    }
}

module.exports = Currencies;