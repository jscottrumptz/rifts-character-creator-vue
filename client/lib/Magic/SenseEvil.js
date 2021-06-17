const Spell = require('../Spell');

class SenseEvil extends Spell {
    constructor() {
        super();
        this.name = 'Sense Evil';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = SenseEvil;