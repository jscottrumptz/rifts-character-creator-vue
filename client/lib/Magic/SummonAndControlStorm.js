const Spell = require('../Spell');

class SummonAndControlStorm extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Storm';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = SummonAndControlStorm;