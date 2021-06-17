const Spell = require('../Spell');

class AnimateControlDead extends Spell {
    constructor() {
        super();
        this.name = 'Animate/Control Dead';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = AnimateControlDead;