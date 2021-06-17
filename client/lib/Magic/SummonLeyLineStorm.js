const Spell = require('../Spell');

class SummonLeyLineStorm extends Spell {
    constructor() {
        super();
        this.name = 'Summon Ley Line Storm';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = SummonLeyLineStorm;