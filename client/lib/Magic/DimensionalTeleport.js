const Spell = require('../Spell');

class DimensionalTeleport extends Spell {
    constructor() {
        super();
        this.name = 'Dimensional Teleport';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = DimensionalTeleport;