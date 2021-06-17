const Spell = require('../Spell');

class Disharmonize extends Spell {
    constructor() {
        super();
        this.name = 'Disharmonize   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = Disharmonize;