const Spell = require('../Spell');

class MemoryBank extends Spell {
    constructor() {
        super();
        this.name = 'Memory Bank   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = MemoryBank;