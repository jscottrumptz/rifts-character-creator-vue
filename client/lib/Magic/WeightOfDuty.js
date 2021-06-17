const Spell = require('../Spell');

class WeightOfDuty extends Spell {
    constructor() {
        super();
        this.name = 'Weight of Duty   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = WeightOfDuty;