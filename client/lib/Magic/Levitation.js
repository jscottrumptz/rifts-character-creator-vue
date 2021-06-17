const Spell = require('../Spell');

class Levitation extends Spell {
    constructor() {
        super();
        this.name = 'Levitation';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Levitation;