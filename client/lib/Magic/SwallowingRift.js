const Spell = require('../Spell');

class SwallowingRift extends Spell {
    constructor() {
        super();
        this.name = 'Swallowing Rift';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = SwallowingRift;