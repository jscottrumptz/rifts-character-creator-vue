const Spell = require('../Spell');

class CursePhobia extends Spell {
    constructor() {
        super();
        this.name = 'Curse: Phobia';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = CursePhobia;