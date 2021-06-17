const Spell = require('../Spell');

class NegatePoisonToxin extends Spell {
    constructor() {
        super();
        this.name = 'Negate Poison/Toxin';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = NegatePoisonToxin;