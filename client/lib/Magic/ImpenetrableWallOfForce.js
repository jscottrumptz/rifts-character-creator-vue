const Spell = require('../Spell');

class ImpenetrableWallOfForce extends Spell {
    constructor() {
        super();
        this.name = 'Impenetrable Wall of Force';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = ImpenetrableWallOfForce;