const Spell = require('../Spell');

class DopplegangerSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Doppleganger: Superior';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = DopplegangerSuperior;