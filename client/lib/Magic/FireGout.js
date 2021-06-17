const Spell = require('../Spell');

class FireGout extends Spell {
    constructor() {
        super();
        this.name = 'Fire Gout';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = FireGout;