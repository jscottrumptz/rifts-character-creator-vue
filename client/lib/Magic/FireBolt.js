const Spell = require('../Spell');

class FireBolt extends Spell {
    constructor() {
        super();
        this.name = 'Fire Bolt';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = FireBolt;