const Spell = require('../Spell');

class Oracle extends Spell {
    constructor() {
        super();
        this.name = 'Oracle';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Oracle;