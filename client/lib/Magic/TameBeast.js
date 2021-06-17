const Spell = require('../Spell');

class TameBeast extends Spell {
    constructor() {
        super();
        this.name = 'Tame Beast';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = TameBeast;