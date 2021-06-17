const Spell = require('../Spell');

class Banishment extends Spell {
    constructor() {
        super();
        this.name = 'Banishment';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Banishment;