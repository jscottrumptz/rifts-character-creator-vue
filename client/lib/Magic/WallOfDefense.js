const Spell = require('../Spell');

class WallOfDefense extends Spell {
    constructor() {
        super();
        this.name = 'Wall of Defense';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = WallOfDefense;