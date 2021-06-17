const Spell = require('../Spell');

class MetamorphosisHuman extends Spell {
    constructor() {
        super();
        this.name = 'Metamorphosis: Human';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = MetamorphosisHuman;