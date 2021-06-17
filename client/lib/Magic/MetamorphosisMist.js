const Spell = require('../Spell');

class MetamorphosisMist extends Spell {
    constructor() {
        super();
        this.name = 'Metamorphosis: Mist';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = MetamorphosisMist;