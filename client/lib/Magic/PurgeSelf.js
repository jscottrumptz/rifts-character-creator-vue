const Spell = require('../Spell');

class PurgeSelf extends Spell {
    constructor() {
        super();
        this.name = 'Purge Self';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = PurgeSelf;