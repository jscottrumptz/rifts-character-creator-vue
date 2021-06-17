const Spell = require('../Spell');

class CreateMummy extends Spell {
    constructor() {
        super();
        this.name = 'Create Mummy   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = CreateMummy;