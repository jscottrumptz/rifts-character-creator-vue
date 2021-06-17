const Spell = require('../Spell');

class MagicNet extends Spell {
    constructor() {
        super();
        this.name = 'Magic Net';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = MagicNet;