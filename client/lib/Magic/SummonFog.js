const Spell = require('../Spell');

class SummonFog extends Spell {
    constructor() {
        super();
        this.name = 'Summon Fog   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = SummonFog;