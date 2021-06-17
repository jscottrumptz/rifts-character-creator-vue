const Spell = require('../Spell');

class MagicWarrior extends Spell {
    constructor() {
        super();
        this.name = 'Magic Warrior';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = MagicWarrior;