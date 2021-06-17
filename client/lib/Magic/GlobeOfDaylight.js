const Spell = require('../Spell');

class GlobeOfDaylight extends Spell {
    constructor() {
        super();
        this.name = 'Globe of Daylight';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = GlobeOfDaylight;