const Spell = require('../Spell');

class SonicBlast extends Spell {
    constructor() {
        super();
        this.name = 'Sonic Blast';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = SonicBlast;