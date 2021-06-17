const Spell = require('../Spell');

class PurificationFoodWater extends Spell {
    constructor() {
        super();
        this.name = 'Purification Food/Water';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = PurificationFoodWater;