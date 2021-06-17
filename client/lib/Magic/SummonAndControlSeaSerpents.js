const Spell = require('../Spell');

class SummonAndControlSeaSerpents extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Sea Serpents';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = SummonAndControlSeaSerpents;