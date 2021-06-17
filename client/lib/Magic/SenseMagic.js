const Spell = require('../Spell');

class SenseMagic extends Spell {
    constructor() {
        super();
        this.name = 'Sense Magic';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = SenseMagic;