const Spell = require('../Spell');

class Watchguard extends Spell {
    constructor() {
        super();
        this.name = 'Watchguard   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Watchguard;