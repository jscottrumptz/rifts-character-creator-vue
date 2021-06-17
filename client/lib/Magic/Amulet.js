const Spell = require('../Spell');

class Amulet extends Spell {
    constructor() {
        super();
        this.name = 'Amulet';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = Amulet;