const Spell = require('../Spell');

class Featherlight extends Spell {
    constructor() {
        super();
        this.name = 'Featherlight   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Featherlight;