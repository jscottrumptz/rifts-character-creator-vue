const Spell = require('../Spell');

class Domination extends Spell {
    constructor() {
        super();
        this.name = 'Domination   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Domination;