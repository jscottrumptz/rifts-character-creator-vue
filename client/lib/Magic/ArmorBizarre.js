const Spell = require('../Spell');

class ArmorBizarre extends Spell {
    constructor() {
        super();
        this.name = 'Armor Bizarre   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = ArmorBizarre;