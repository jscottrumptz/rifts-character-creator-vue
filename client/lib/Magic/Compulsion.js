const Spell = require('../Spell');

class Compulsion extends Spell {
    constructor() {
        super();
        this.name = 'Compulsion';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Compulsion;