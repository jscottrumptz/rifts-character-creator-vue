const Spell = require('../Spell');

class GlobeOfSilence extends Spell {
    constructor() {
        super();
        this.name = 'Globe of Silence';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = GlobeOfSilence;