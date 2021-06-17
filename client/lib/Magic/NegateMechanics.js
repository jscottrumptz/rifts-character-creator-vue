const Spell = require('../Spell');

class NegateMechanics extends Spell {
    constructor() {
        super();
        this.name = 'Negate Mechanics';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = NegateMechanics;