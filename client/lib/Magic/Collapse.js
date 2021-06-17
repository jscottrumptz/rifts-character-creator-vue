const Spell = require('../Spell');

class Collapse extends Spell {
    constructor() {
        super();
        this.name = 'Collapse';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = Collapse;