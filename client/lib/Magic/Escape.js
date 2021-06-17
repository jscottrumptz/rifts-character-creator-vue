const Spell = require('../Spell');

class Escape extends Spell {
    constructor() {
        super();
        this.name = 'Escape';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Escape;