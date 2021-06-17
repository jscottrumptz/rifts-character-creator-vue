const Spell = require('../Spell');

class ArmorOfIthan extends Spell {
    constructor() {
        super();
        this.name = 'Armor of Ithan';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = ArmorOfIthan;