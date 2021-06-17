const Spell = require('../Spell');

class HeavyAir extends Spell {
    constructor() {
        super();
        this.name = 'Heavy Air';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = HeavyAir;