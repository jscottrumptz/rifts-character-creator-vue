const Spell = require('../Spell');

class DeathCurseSpecial extends Spell {
    constructor() {
        super();
        this.name = 'Death Curse Special';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = DeathCurseSpecial;