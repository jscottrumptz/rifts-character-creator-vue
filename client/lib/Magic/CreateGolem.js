const Spell = require('../Spell');

class CreateGolem extends Spell {
    constructor() {
        super();
        this.name = 'Create Golem';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = CreateGolem;