const Spell = require('../Spell');

class DStep extends Spell {
    constructor() {
        super();
        this.name = 'D-Step';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = DStep;