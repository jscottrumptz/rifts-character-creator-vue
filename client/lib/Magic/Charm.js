const Spell = require('../Spell');

class Charm extends Spell {
    constructor() {
        super();
        this.name = 'Charm   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Charm;