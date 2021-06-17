const Spell = require('../Spell');

class FireBlossom extends Spell {
    constructor() {
        super();
        this.name = 'Fire Blossom';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = FireBlossom;