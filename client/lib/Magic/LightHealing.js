const Spell = require('../Spell');

class LightHealing extends Spell {
    constructor() {
        super();
        this.name = 'Light Healing';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = LightHealing;