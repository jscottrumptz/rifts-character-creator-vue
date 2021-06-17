const Spell = require('../Spell');

class LeyLineRestoration extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Restoration';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = LeyLineRestoration;