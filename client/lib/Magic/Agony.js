const Spell = require('../Spell');

class Agony extends Spell {
    constructor() {
        super();
        this.name = 'Agony';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = Agony;