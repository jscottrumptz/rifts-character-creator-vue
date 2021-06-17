const Spell = require('../Spell');

class IllusionBooster extends Spell {
    constructor() {
        super();
        this.name = 'Illusion Booster   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = IllusionBooster;