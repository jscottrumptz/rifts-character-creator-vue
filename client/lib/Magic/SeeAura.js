const Spell = require('../Spell');

class SeeAura extends Spell {
    constructor() {
        super();
        this.name = 'See Aura';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = SeeAura;