const Spell = require('../Spell');

class LeyLineTransmission extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Transmission';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = LeyLineTransmission;