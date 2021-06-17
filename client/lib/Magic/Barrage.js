const Spell = require('../Spell');

class Barrage extends Spell {
    constructor() {
        super();
        this.name = 'Barrage   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = Barrage;