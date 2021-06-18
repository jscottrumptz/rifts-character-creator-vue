const Spell = require('../Spell');

class MysticQuake extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Quake';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = MysticQuake;