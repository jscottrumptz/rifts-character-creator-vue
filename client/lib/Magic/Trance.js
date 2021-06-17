const Spell = require('../Spell');

class Trance extends Spell {
    constructor() {
        super();
        this.name = 'Trance   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Trance;