const Spell = require('../Spell');

class SteelRain extends Spell {
    constructor() {
        super();
        this.name = 'Steel Rain';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = SteelRain;