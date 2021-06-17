const Spell = require('../Spell');

class SuperHealing extends Spell {
    constructor() {
        super();
        this.name = 'Super-Healing';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = SuperHealing;