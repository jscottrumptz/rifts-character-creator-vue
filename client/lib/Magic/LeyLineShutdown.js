const Spell = require('../Spell');

class LeyLineShutdown extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Shutdown';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = LeyLineShutdown;