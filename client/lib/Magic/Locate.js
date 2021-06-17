const Spell = require('../Spell');

class Locate extends Spell {
    constructor() {
        super();
        this.name = 'Locate';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Locate;