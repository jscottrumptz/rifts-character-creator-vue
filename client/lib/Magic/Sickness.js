const Spell = require('../Spell');

class Sickness extends Spell {
    constructor() {
        super();
        this.name = 'Sickness';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Sickness;