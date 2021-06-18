const Spell = require('../Spell');

class Sanctuary extends Spell {
    constructor() {
        super();
        this.name = 'Sanctuary';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = Sanctuary;