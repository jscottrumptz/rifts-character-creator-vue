const Spell = require('../Spell');

class StoneToFlesh extends Spell {
    constructor() {
        super();
        this.name = 'Stone to Flesh';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = StoneToFlesh;