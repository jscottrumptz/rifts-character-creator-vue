const Spell = require('../Spell');

class ShelteringForce extends Spell {
    constructor() {
        super();
        this.name = 'Sheltering Force';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = ShelteringForce;