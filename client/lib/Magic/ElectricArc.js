const Spell = require('../Spell');

class ElectricArc extends Spell {
    constructor() {
        super();
        this.name = 'Electric Arc';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = ElectricArc;