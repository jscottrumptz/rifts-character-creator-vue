const Spell = require('../Spell');

class Lifeblast extends Spell {
    constructor() {
        super();
        this.name = 'Lifeblast   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Lifeblast;