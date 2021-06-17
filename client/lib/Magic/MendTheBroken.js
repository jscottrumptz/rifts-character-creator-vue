const Spell = require('../Spell');

class MendTheBroken extends Spell {
    constructor() {
        super();
        this.name = 'Mend the Broken';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = MendTheBroken;