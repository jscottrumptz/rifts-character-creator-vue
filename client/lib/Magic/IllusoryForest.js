const Spell = require('../Spell');

class IllusoryForest extends Spell {
    constructor() {
        super();
        this.name = 'Illusory Forest -';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = IllusoryForest;