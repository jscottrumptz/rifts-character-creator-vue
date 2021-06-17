const Spell = require('../Spell');

class SpoilWaterFood extends Spell {
    constructor() {
        super();
        this.name = 'Spoil Water/Food';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = SpoilWaterFood;