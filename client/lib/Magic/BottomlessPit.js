const Spell = require('../Spell');

class BottomlessPit extends Spell {
    constructor() {
        super();
        this.name = 'Bottomless Pit   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = BottomlessPit;