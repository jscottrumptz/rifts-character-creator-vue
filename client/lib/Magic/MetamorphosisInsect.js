const Spell = require('../Spell');

class MetamorphosisInsect extends Spell {
    constructor() {
        super();
        this.name = 'Metamorphosis: Insect';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = MetamorphosisInsect;