const Spell = require('../Spell');

class ChromaticProtection extends Spell {
    constructor() {
        super();
        this.name = 'Chromatic Protection   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = ChromaticProtection;