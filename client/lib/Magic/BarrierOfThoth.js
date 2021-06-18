const Spell = require('../Spell');

class BarrierOfThoth extends Spell {
    constructor() {
        super();
        this.name = 'Barrier of Thoth';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = BarrierOfThoth;