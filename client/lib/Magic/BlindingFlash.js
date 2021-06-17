const Spell = require('../Spell');

class BlindingFlash extends Spell {
    constructor() {
        super();
        this.name = 'Blinding Flash';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = BlindingFlash;