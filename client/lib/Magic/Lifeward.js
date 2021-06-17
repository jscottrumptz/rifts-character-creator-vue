const Spell = require('../Spell');

class Lifeward extends Spell {
    constructor() {
        super();
        this.name = 'Lifeward';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Lifeward;