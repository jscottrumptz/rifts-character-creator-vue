const Spell = require('../Spell');

class FamiliarLink extends Spell {
    constructor() {
        super();
        this.name = 'Familiar Link';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = FamiliarLink;