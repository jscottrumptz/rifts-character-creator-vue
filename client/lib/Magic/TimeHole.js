const Spell = require('../Spell');

class TimeHole extends Spell {
    constructor() {
        super();
        this.name = 'Time Hole   ';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = TimeHole;