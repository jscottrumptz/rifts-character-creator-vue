const Spell = require('../Spell');

class Talisman extends Spell {
    constructor() {
        super();
        this.name = 'Talisman';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = Talisman;