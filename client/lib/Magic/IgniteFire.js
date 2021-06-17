const Spell = require('../Spell');

class IgniteFire extends Spell {
    constructor() {
        super();
        this.name = 'Ignite Fire';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = IgniteFire;