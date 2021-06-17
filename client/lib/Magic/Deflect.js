const Spell = require('../Spell');

class Deflect extends Spell {
    constructor() {
        super();
        this.name = 'Deflect   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Deflect;