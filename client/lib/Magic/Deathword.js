const Spell = require('../Spell');

class Deathword extends Spell {
    constructor() {
        super();
        this.name = 'Deathword';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Deathword;