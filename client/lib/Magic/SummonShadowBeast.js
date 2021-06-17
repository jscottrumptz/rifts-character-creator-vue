const Spell = require('../Spell');

class SummonShadowBeast extends Spell {
    constructor() {
        super();
        this.name = 'Summon Shadow Beast   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = SummonShadowBeast;