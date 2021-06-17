const Spell = require('../Spell');

class CloseRift extends Spell {
    constructor() {
        super();
        this.name = 'Close Rift';
        this.group = 'Invocation';
        this.level = 'Fourteen';
    }
}

module.exports = CloseRift;