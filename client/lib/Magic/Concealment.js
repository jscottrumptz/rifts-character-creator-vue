const Spell = require('../Spell');

class Concealment extends Spell {
    constructor() {
        super();
        this.name = 'Concealment';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Concealment;