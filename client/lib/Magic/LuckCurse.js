const Spell = require('../Spell');

class LuckCurse extends Spell {
    constructor() {
        super();
        this.name = 'Luck Curse';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = LuckCurse;