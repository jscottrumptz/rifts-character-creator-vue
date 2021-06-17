const Spell = require('../Spell');

class LeyLineTendrilBolts extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Tendril Bolts';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = LeyLineTendrilBolts;