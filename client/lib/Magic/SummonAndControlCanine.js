const Spell = require('../Spell');

class SummonAndControlCanine extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Canine';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = SummonAndControlCanine;