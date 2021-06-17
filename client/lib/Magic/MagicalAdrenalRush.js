const Spell = require('../Spell');

class MagicalAdrenalRush extends Spell {
    constructor() {
        super();
        this.name = 'Magical-Adrenal Rush';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = MagicalAdrenalRush;