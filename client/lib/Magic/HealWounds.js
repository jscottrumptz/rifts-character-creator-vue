const Spell = require('../Spell');

class HealWounds extends Spell {
    constructor() {
        super();
        this.name = 'Heal Wounds   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = HealWounds;