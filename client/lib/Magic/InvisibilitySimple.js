const Spell = require('../Spell');

class InvisibilitySimple extends Spell {
    constructor() {
        super();
        this.name = 'Invisibility: Simple';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = InvisibilitySimple;