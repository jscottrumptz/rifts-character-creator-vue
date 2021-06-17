const Spell = require('../Spell');

class SummonLesserBeing extends Spell {
    constructor() {
        super();
        this.name = 'Summon Lesser Being';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = SummonLesserBeing;