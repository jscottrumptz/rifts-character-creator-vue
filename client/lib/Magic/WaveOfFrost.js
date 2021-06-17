const Spell = require('../Spell');

class WaveOfFrost extends Spell {
    constructor() {
        super();
        this.name = 'Wave of Frost';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = WaveOfFrost;