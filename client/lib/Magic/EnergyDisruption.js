const Spell = require('../Spell');

class EnergyDisruption extends Spell {
    constructor() {
        super();
        this.name = 'Energy Disruption   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = EnergyDisruption;