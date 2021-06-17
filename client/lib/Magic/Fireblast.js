const Spell = require('../Spell');

class Fireblast extends Spell {
    constructor() {
        super();
        this.name = 'Fireblast';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Fireblast;