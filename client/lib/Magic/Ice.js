const Spell = require('../Spell');

class Ice extends Spell {
    constructor() {
        super();
        this.name = 'Ice   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Ice;