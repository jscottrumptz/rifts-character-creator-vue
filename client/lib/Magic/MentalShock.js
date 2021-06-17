const Spell = require('../Spell');

class MentalShock extends Spell {
    constructor() {
        super();
        this.name = 'Mental Shock';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = MentalShock;