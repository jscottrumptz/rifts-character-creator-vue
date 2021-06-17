const Spell = require('../Spell');

class LightTarget extends Spell {
    constructor() {
        super();
        this.name = 'Light Target';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = LightTarget;