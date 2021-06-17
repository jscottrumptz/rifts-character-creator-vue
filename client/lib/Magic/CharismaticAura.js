const Spell = require('../Spell');

class CharismaticAura extends Spell {
    constructor() {
        super();
        this.name = 'Charismatic Aura   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = CharismaticAura;