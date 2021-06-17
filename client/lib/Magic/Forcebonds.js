const Spell = require('../Spell');

class Forcebonds extends Spell {
    constructor() {
        super();
        this.name = 'Forcebonds';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Forcebonds;