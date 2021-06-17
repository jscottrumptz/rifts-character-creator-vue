const Spell = require('../Spell');

class ThrowingStones extends Spell {
    constructor() {
        super();
        this.name = 'Throwing Stones';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = ThrowingStones;