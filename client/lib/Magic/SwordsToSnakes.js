const Spell = require('../Spell');

class SwordsToSnakes extends Spell {
    constructor() {
        super();
        this.name = 'Swords to Snakes';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = SwordsToSnakes;