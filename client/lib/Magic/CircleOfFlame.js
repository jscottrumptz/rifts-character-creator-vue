const Spell = require('../Spell');

class CircleOfFlame extends Spell {
    constructor() {
        super();
        this.name = 'Circle of Flame   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = CircleOfFlame;