const Spell = require('../Spell');

class SuperhumanStrength extends Spell {
    constructor() {
        super();
        this.name = 'Superhuman Strength   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = SuperhumanStrength;