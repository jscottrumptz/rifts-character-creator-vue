const Spell = require('../Spell');

class InvisibilitySuperior extends Spell {
    constructor() {
        super();
        this.name = 'Invisibility: Superior';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = InvisibilitySuperior;