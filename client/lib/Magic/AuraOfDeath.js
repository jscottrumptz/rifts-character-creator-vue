const Spell = require('../Spell');

class AuraOfDeath extends Spell {
    constructor() {
        super();
        this.name = 'Aura of Death   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = AuraOfDeath;