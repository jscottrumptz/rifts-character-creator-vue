const Spell = require('../Spell');

class AuraOfPower extends Spell {
    constructor() {
        super();
        this.name = 'Aura of Power';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = AuraOfPower;