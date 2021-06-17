const Spell = require('../Spell');

class BreatheWithoutAir extends Spell {
    constructor() {
        super();
        this.name = 'Breathe Without Air';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = BreatheWithoutAir;