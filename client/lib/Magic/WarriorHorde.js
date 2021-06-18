const Spell = require('../Spell');

class WarriorHorde extends Spell {
    constructor() {
        super();
        this.name = 'Warrior Horde';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = WarriorHorde;