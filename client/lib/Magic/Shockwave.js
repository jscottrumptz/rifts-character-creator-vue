const Spell = require('../Spell');

class Shockwave extends Spell {
    constructor() {
        super();
        this.name = 'Shockwave';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Shockwave;