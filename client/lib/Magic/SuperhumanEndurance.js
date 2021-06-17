const Spell = require('../Spell');

class SuperhumanEndurance extends Spell {
    constructor() {
        super();
        this.name = 'Superhuman Endurance   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = SuperhumanEndurance;