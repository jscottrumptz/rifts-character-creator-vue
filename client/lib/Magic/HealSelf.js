const Spell = require('../Spell');

class HealSelf extends Spell {
    constructor() {
        super();
        this.name = 'Heal Self';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = HealSelf;