const Spell = require('../Spell');

class LeyLinePhantom extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Phantom';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = LeyLinePhantom;