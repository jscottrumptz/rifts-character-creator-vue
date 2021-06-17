const Spell = require('../Spell');

class Horror extends Spell {
    constructor() {
        super();
        this.name = 'Horror   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Horror;