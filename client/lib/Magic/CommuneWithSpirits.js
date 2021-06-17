const Spell = require('../Spell');

class CommuneWithSpirits extends Spell {
    constructor() {
        super();
        this.name = 'Commune with Spirits  ';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = CommuneWithSpirits;