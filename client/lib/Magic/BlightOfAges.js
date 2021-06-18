const Spell = require('../Spell');

class BlightOfAges extends Spell {
    constructor() {
        super();
        this.name = 'Blight of Ages';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = BlightOfAges;