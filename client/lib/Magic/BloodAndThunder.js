const Spell = require('../Spell');

class BloodAndThunder extends Spell {
    constructor() {
        super();
        this.name = 'Blood and Thunder';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = BloodAndThunder;