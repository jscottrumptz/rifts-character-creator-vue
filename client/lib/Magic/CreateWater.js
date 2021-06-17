const Spell = require('../Spell');

class CreateWater extends Spell {
    constructor() {
        super();
        this.name = 'Create Water   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = CreateWater;