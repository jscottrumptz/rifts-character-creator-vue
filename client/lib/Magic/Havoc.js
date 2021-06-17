const Spell = require('../Spell');

class Havoc extends Spell {
    constructor() {
        super();
        this.name = 'Havoc';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Havoc;