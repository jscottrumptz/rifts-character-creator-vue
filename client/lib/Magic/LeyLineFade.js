const Spell = require('../Spell');

class LeyLineFade extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Fade';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = LeyLineFade;