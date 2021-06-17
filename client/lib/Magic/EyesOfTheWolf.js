const Spell = require('../Spell');

class EyesOfTheWolf extends Spell {
    constructor() {
        super();
        this.name = 'Eyes of the Wolf';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = EyesOfTheWolf;