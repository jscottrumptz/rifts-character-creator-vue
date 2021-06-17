const Spell = require('../Spell');

class SecondSight extends Spell {
    constructor() {
        super();
        this.name = 'Second Sight';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = SecondSight;