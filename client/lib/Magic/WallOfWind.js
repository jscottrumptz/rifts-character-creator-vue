const Spell = require('../Spell');

class WallOfWind extends Spell {
    constructor() {
        super();
        this.name = 'Wall of Wind';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = WallOfWind;