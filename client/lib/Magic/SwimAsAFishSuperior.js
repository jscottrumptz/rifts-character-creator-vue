const Spell = require('../Spell');

class SwimAsAFishSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Swim as a Fish: Superior   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = SwimAsAFishSuperior;