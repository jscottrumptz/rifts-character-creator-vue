const Spell = require('../Spell');

class ResistFire extends Spell {
    constructor() {
        super();
        this.name = 'Resist Fire';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = ResistFire;