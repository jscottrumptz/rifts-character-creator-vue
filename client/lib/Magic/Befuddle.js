const Spell = require('../Spell');

class Befuddle extends Spell {
    constructor() {
        super();
        this.name = 'Befuddle';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Befuddle;