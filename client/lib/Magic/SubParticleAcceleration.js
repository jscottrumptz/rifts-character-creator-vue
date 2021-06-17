const Spell = require('../Spell');

class SubParticleAcceleration extends Spell {
    constructor() {
        super();
        this.name = 'Sub-Particle Acceleration';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = SubParticleAcceleration;