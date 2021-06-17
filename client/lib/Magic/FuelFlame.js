const Spell = require('../Spell');

class FuelFlame extends Spell {
    constructor() {
        super();
        this.name = 'Fuel Flame';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = FuelFlame;