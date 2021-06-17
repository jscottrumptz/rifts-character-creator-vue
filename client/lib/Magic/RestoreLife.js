const Spell = require('../Spell');

class RestoreLife extends Spell {
    constructor() {
        super();
        this.name = 'Restore Life';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = RestoreLife;