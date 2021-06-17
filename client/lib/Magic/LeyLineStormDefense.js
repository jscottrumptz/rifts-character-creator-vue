const Spell = require('../Spell');

class LeyLineStormDefense extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Storm Defense   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = LeyLineStormDefense;