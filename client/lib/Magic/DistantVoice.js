const Spell = require('../Spell');

class DistantVoice extends Spell {
    constructor() {
        super();
        this.name = 'Distant Voice   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = DistantVoice;