const Spell = require('../Spell');

class Thunderclap extends Spell {
    constructor() {
        super();
        this.name = 'Thunderclap';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = Thunderclap;