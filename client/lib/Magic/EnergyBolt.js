const Spell = require('../Spell');

class EnergyBolt extends Spell {
    constructor() {
        super();
        this.name = 'Energy Bolt';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = EnergyBolt;