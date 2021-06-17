const Spell = require('../Spell');

class Chameleon extends Spell {
    constructor() {
        super();
        this.name = 'Chameleon';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Chameleon;