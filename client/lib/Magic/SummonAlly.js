const Spell = require('../Spell');

class SummonAlly extends Spell {
    constructor() {
        super();
        this.name = 'Summon Ally';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = SummonAlly;