const Spell = require('../Spell');

class FireGlobe extends Spell {
    constructor() {
        super();
        this.name = 'Fire Globe';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = FireGlobe;