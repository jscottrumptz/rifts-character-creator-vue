const Spell = require('../Spell');

class LightningArc extends Spell {
    constructor() {
        super();
        this.name = 'Lightning Arc';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = LightningArc;