const Spell = require('../Spell');

class ReduceSelf extends Spell {
    constructor() {
        super();
        this.name = 'Reduce Self';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = ReduceSelf;