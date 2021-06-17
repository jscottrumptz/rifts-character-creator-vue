const Spell = require('../Spell');

class OrbOfCold extends Spell {
    constructor() {
        super();
        this.name = 'Orb of Cold';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = OrbOfCold;