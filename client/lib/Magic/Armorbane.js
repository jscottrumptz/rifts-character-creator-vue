const Spell = require('../Spell');

class Armorbane extends Spell {
    constructor() {
        super();
        this.name = 'Armorbane   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Armorbane;