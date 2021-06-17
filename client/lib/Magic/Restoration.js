const Spell = require('../Spell');

class Restoration extends Spell {
    constructor() {
        super();
        this.name = 'Restoration';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = Restoration;