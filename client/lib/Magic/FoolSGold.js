const Spell = require('../Spell');

class FoolSGold extends Spell {
    constructor() {
        super();
        this.name = `Fool's Gold`;
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = FoolSGold;