const Spell = require('../Spell');

class RemoveCurse extends Spell {
    constructor() {
        super();
        this.name = 'Remove Curse   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = RemoveCurse;