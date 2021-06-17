const Spell = require('../Spell');

class SpinningBlades extends Spell {
    constructor() {
        super();
        this.name = 'Spinning Blades';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = SpinningBlades;