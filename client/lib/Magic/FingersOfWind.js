const Spell = require('../Spell');

class FingersOfWind extends Spell {
    constructor() {
        super();
        this.name = 'Fingers of Wind';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = FingersOfWind;