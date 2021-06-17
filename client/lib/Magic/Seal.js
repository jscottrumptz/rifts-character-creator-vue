const Spell = require('../Spell');

class Seal extends Spell {
    constructor() {
        super();
        this.name = 'Seal';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Seal;