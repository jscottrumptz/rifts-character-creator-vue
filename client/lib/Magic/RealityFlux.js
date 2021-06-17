const Spell = require('../Spell');

class RealityFlux extends Spell {
    constructor() {
        super();
        this.name = 'Reality Flux';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = RealityFlux;