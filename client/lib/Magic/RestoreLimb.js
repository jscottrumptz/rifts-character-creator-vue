const Spell = require('../Spell');

class RestoreLimb extends Spell {
    constructor() {
        super();
        this.name = 'Restore Limb';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = RestoreLimb;