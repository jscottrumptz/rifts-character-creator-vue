const Spell = require('../Spell');

class Tongues extends Spell {
    constructor() {
        super();
        this.name = 'Tongues   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Tongues;