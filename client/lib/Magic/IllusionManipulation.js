const Spell = require('../Spell');

class IllusionManipulation extends Spell {
    constructor() {
        super();
        this.name = 'Illusion Manipulation -';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = IllusionManipulation;