const Spell = require('../Spell');

class WispsOfConfusion extends Spell {
    constructor() {
        super();
        this.name = 'Wisps of Confusion';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = WispsOfConfusion;