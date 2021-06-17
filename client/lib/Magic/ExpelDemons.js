const Spell = require('../Spell');

class ExpelDemons extends Spell {
    constructor() {
        super();
        this.name = 'Expel Demons';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = ExpelDemons;