const Spell = require('../Spell');

class LeyLineGhost extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Ghost';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = LeyLineGhost;