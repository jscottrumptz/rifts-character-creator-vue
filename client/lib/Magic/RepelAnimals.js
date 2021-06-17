const Spell = require('../Spell');

class RepelAnimals extends Spell {
    constructor() {
        super();
        this.name = 'Repel Animals';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = RepelAnimals;