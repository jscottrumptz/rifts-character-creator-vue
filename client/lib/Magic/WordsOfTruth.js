const Spell = require('../Spell');

class WordsOfTruth extends Spell {
    constructor() {
        super();
        this.name = 'Words of Truth';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = WordsOfTruth;