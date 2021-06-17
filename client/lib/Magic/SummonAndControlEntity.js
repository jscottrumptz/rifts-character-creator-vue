const Spell = require('../Spell');

class SummonAndControlEntity extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Entity';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = SummonAndControlEntity;