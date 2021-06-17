const Spell = require('../Spell');

class EnergyField extends Spell {
    constructor() {
        super();
        this.name = 'Energy Field   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = EnergyField;