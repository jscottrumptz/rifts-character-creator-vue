const Spell = require('../Spell');

class MinorCurse extends Spell {
    constructor() {
        super();
        this.name = 'Minor Curse';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = MinorCurse;