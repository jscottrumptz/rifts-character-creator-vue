const Spell = require('../Spell');

class Soultwist extends Spell {
    constructor() {
        super();
        this.name = 'Soultwist   ';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = Soultwist;