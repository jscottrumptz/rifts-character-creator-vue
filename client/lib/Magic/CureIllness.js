const Spell = require('../Spell');

class CureIllness extends Spell {
    constructor() {
        super();
        this.name = 'Cure Illness   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = CureIllness;