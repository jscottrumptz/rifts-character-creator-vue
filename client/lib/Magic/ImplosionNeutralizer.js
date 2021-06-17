const Spell = require('../Spell');

class ImplosionNeutralizer extends Spell {
    constructor() {
        super();
        this.name = 'Implosion Neutralizer   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = ImplosionNeutralizer;