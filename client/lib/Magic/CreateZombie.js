const Spell = require('../Spell');

class CreateZombie extends Spell {
    constructor() {
        super();
        this.name = 'Create Zombie';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = CreateZombie;