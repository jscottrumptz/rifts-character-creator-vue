const Spell = require('../Spell');

class RicochetStrike extends Spell {
    constructor() {
        super();
        this.name = 'Ricochet Strike   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = RicochetStrike;