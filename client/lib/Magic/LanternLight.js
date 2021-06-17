const Spell = require('../Spell');

class LanternLight extends Spell {
    constructor() {
        super();
        this.name = 'Lantern Light';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = LanternLight;