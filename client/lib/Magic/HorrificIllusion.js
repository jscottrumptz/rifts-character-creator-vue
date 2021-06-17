const Spell = require('../Spell');

class HorrificIllusion extends Spell {
    constructor() {
        super();
        this.name = 'Horrific Illusion   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = HorrificIllusion;