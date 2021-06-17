const Spell = require('../Spell');

class Sleep extends Spell {
    constructor() {
        super();
        this.name = 'Sleep   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Sleep;