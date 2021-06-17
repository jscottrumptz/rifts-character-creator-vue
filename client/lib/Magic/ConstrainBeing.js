const Spell = require('../Spell');

class ConstrainBeing extends Spell {
    constructor() {
        super();
        this.name = 'Constrain Being';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = ConstrainBeing;