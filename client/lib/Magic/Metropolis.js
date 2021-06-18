const Spell = require('../Spell');

class Metropolis extends Spell {
    constructor() {
        super();
        this.name = 'Metropolis';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = Metropolis;