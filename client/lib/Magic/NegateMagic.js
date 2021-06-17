const Spell = require('../Spell');

class NegateMagic extends Spell {
    constructor() {
        super();
        this.name = 'Negate Magic';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = NegateMagic;