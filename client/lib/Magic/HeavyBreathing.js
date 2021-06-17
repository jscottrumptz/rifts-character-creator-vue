const Spell = require('../Spell');

class HeavyBreathing extends Spell {
    constructor() {
        super();
        this.name = 'Heavy Breathing';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = HeavyBreathing;