const Spell = require('../Spell');

class MysticPortal extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Portal';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = MysticPortal;