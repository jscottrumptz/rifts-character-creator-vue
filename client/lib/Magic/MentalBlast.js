const Spell = require('../Spell');

class MentalBlast extends Spell {
    constructor() {
        super();
        this.name = 'Mental Blast   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = MentalBlast;