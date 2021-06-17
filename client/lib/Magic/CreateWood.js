const Spell = require('../Spell');

class CreateWood extends Spell {
    constructor() {
        super();
        this.name = 'Create Wood';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = CreateWood;