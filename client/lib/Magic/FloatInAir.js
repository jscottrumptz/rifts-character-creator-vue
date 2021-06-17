const Spell = require('../Spell');

class FloatInAir extends Spell {
    constructor() {
        super();
        this.name = 'Float in Air';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = FloatInAir;