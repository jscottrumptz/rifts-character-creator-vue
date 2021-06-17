const Spell = require('../Spell');

class MetamorphosisAnimal extends Spell {
    constructor() {
        super();
        this.name = 'Metamorphosis: Animal';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = MetamorphosisAnimal;