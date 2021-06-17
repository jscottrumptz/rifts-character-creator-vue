const Spell = require('../Spell');

class MagicPigeon extends Spell {
    constructor() {
        super();
        this.name = 'Magic Pigeon';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = MagicPigeon;