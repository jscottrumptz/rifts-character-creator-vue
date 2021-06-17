const Spell = require('../Spell');

class ImperviousToPoison extends Spell {
    constructor() {
        super();
        this.name = 'Impervious to Poison';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = ImperviousToPoison;