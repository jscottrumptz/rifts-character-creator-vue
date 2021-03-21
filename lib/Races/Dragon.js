const Race = require('../Race');

class Dragon extends Race {
    constructor() {
        super();
        this.name = 'Dragon'
        this.description = 'Rifts World Book 30: D-Bees of North America pg. 27'
        this.iqRoll = { sides: 6, amount: 1, bonus: 8 };
        this.meRoll = { sides: 6, amount: 1, bonus: 9 };
        this.maRoll = { sides: 6, amount: 2, bonus: 14 };
        this.psRoll = { sides: 6, amount: 2, bonus: 22 };
        this.ppRoll = { sides: 6, amount: 2, bonus: 10 };
        this.peRoll = { sides: 6, amount: 2, bonus: 10 };
        this.pbRoll = { sides: 6, amount: 1, bonus: 6 };
        this.spdRoll = { sides: 6, amount: 2, bonus: 10 };
    }
}

module.exports = Dragon;