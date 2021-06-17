const Spell = require('../Spell');

class Climb extends Spell {
    constructor() {
        super();
        this.name = 'Climb';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Climb;