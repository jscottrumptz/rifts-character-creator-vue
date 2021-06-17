const Spell = require('../Spell');

class Resurrection extends Spell {
    constructor() {
        super();
        this.name = 'Resurrection';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = Resurrection;