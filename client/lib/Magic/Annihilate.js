const Spell = require('../Spell');

class Annihilate extends Spell {
    constructor() {
        super();
        this.name = 'Annihilate';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = Annihilate;