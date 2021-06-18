const Spell = require('../Spell');

class TheSlowness extends Spell {
    constructor() {
        super();
        this.name = 'The Slowness';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = TheSlowness;