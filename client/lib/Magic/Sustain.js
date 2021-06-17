const Spell = require('../Spell');

class Sustain extends Spell {
    constructor() {
        super();
        this.name = 'Sustain   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Sustain;