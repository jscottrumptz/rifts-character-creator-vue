const Spell = require('../Spell');

class ExtinguishFire extends Spell {
    constructor() {
        super();
        this.name = 'Extinguish Fire';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = ExtinguishFire;