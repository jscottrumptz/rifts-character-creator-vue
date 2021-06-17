const Spell = require('../Spell');

class DragonFire extends Spell {
    constructor() {
        super();
        this.name = 'Dragon Fire';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = DragonFire;