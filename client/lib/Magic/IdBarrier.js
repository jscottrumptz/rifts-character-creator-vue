const Spell = require('../Spell');

class IdBarrier extends Spell {
    constructor() {
        super();
        this.name = 'Id Barrier';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = IdBarrier;