const Spell = require('../Spell');

class FrequencyJamming extends Spell {
    constructor() {
        super();
        this.name = 'Frequency Jamming   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = FrequencyJamming;