const Spell = require('../Spell');

class SummonAndControlAnimals extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Animals   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = SummonAndControlAnimals;