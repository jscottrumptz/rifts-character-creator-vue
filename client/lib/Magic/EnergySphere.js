const Spell = require('../Spell');

class EnergySphere extends Spell {
    constructor() {
        super();
        this.name = 'Energy Sphere   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = EnergySphere;