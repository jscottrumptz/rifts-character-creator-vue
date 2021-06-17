const Spell = require('../Spell');

class Apparition extends Spell {
    constructor() {
        super();
        this.name = 'Apparition';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Apparition;