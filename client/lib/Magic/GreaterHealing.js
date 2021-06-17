const Spell = require('../Spell');

class GreaterHealing extends Spell {
    constructor() {
        super();
        this.name = 'Greater Healing';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = GreaterHealing;