const Spell = require('../Spell');

class WallOfNot extends Spell {
    constructor() {
        super();
        this.name = 'Wall of Not';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = WallOfNot;