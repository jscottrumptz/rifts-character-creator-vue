const Spell = require('../Spell');

class ImperviousToEnergy extends Spell {
    constructor() {
        super();
        this.name = 'Impervious to Energy';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = ImperviousToEnergy;