const Spell = require('../Spell');

class LeyLineResurrection extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Resurrection';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = LeyLineResurrection;