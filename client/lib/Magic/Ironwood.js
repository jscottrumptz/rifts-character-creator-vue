const Spell = require('../Spell');

class Ironwood extends Spell {
    constructor() {
        super();
        this.name = 'Ironwood';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = Ironwood;