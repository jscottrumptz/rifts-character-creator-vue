const Spell = require('../Spell');

class ImperviousToFire extends Spell {
    constructor() {
        super();
        this.name = 'Impervious to Fire';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = ImperviousToFire;