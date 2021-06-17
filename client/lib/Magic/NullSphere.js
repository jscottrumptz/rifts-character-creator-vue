const Spell = require('../Spell');

class NullSphere extends Spell {
    constructor() {
        super();
        this.name = 'Null Sphere';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = NullSphere;