const Spell = require('../Spell');

class DispelMagicBarriers extends Spell {
    constructor() {
        super();
        this.name = 'Dispel Magic Barriers';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = DispelMagicBarriers;