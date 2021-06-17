const Spell = require('../Spell');

class SummonGreaterFamiliar extends Spell {
    constructor() {
        super();
        this.name = 'Summon Greater Familiar';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = SummonGreaterFamiliar;