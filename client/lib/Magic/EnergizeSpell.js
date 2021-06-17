const Spell = require('../Spell');

class EnergizeSpell extends Spell {
    constructor() {
        super();
        this.name = 'Energize Spell';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = EnergizeSpell;