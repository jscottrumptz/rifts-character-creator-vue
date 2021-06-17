const Spell = require('../Spell');

class ShadowMeld extends Spell {
    constructor() {
        super();
        this.name = 'Shadow Meld   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = ShadowMeld;