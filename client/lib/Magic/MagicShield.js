const Spell = require('../Spell');

class MagicShield extends Spell {
    constructor() {
        super();
        this.name = 'Magic Shield';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = MagicShield;