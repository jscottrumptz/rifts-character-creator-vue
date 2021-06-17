const Spell = require('../Spell');

class CureMinorDisorders extends Spell {
    constructor() {
        super();
        this.name = 'Cure Minor Disorders   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = CureMinorDisorders;