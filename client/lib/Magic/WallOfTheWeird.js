const Spell = require('../Spell');

class WallOfTheWeird extends Spell {
    constructor() {
        super();
        this.name = 'Wall of the Weird   ';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = WallOfTheWeird;