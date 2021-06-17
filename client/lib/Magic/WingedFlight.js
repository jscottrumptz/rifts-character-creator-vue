const Spell = require('../Spell');

class WingedFlight extends Spell {
    constructor() {
        super();
        this.name = 'Winged Flight';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = WingedFlight;