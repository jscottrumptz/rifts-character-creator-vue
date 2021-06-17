const Spell = require('../Spell');

class AntiMagicCloud extends Spell {
    constructor() {
        super();
        this.name = 'Anti Magic Cloud   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = AntiMagicCloud;