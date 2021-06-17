const Spell = require('../Spell');

class Frostblade extends Spell {
    constructor() {
        super();
        this.name = 'Frostblade';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Frostblade;