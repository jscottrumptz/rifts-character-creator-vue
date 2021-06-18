const Spell = require('../Spell');

class Hivemind extends Spell {
    constructor() {
        super();
        this.name = 'Hivemind';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = Hivemind;