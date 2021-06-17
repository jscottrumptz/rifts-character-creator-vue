const Spell = require('../Spell');

class Cleanse extends Spell {
    constructor() {
        super();
        this.name = 'Cleanse';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Cleanse;