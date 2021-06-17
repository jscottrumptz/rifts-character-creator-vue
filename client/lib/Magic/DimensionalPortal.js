const Spell = require('../Spell');

class DimensionalPortal extends Spell {
    constructor() {
        super();
        this.name = 'Dimensional Portal';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = DimensionalPortal;