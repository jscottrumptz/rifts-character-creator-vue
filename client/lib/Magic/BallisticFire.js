const Spell = require('../Spell');

class BallisticFire extends Spell {
    constructor() {
        super();
        this.name = 'Ballistic Fire';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = BallisticFire;