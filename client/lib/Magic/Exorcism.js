const Spell = require('../Spell');

class Exorcism extends Spell {
    constructor() {
        super();
        this.name = 'Exorcism';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Exorcism;