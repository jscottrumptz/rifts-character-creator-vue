const Spell = require('../Spell');

class PowerBolt extends Spell {
    constructor() {
        super();
        this.name = 'Power Bolt';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = PowerBolt;