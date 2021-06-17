const Spell = require('../Spell');

class TumDead extends Spell {
    constructor() {
        super();
        this.name = 'Tum Dead';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = TumDead;