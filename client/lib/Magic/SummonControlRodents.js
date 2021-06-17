const Spell = require('../Spell');

class SummonControlRodents extends Spell {
    constructor() {
        super();
        this.name = 'Summon/Control Rodents';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = SummonControlRodents;