const Spell = require('../Spell');

class CircleOfTravel extends Spell {
    constructor() {
        super();
        this.name = 'Circle of Travel';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = CircleOfTravel;