const Spell = require('../Spell');

class LeyLineTimeFlux extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Time Flux';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = LeyLineTimeFlux;