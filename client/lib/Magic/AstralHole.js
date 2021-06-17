const Spell = require('../Spell');

class AstralHole extends Spell {
    constructor() {
        super();
        this.name = 'Astral Hole   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = AstralHole;