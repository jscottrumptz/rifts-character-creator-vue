const Spell = require('../Spell');

class MetamorphosisSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Metamorphosis : Superior   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = MetamorphosisSuperior;