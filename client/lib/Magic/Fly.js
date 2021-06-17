const Spell = require('../Spell');

class Fly extends Spell {
    constructor() {
        super();
        this.name = 'Fly   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Fly;