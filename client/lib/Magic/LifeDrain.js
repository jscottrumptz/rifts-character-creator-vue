const Spell = require('../Spell');

class LifeDrain extends Spell {
    constructor() {
        super();
        this.name = 'Life Drain';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = LifeDrain;