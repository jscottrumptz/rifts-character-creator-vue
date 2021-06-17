const Spell = require('../Spell');

class PurgeOther extends Spell {
    constructor() {
        super();
        this.name = 'Purge Other   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = PurgeOther;