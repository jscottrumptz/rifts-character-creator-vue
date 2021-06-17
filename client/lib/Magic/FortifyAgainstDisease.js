const Spell = require('../Spell');

class FortifyAgainstDisease extends Spell {
    constructor() {
        super();
        this.name = 'Fortify Against Disease   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = FortifyAgainstDisease;