const Spell = require('../Spell');

class Telekinesis extends Spell {
    constructor() {
        super();
        this.name = 'Telekinesis';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = Telekinesis;