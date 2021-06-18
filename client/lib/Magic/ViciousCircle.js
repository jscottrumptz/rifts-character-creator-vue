const Spell = require('../Spell');

class ViciousCircle extends Spell {
    constructor() {
        super();
        this.name = 'Vicious Circle';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = ViciousCircle;