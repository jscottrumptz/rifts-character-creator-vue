const Spell = require('../Spell');

class SwimAsAFish extends Spell {
    constructor() {
        super();
        this.name = 'Swim as a Fish';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = SwimAsAFish;