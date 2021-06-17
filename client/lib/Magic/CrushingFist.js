const Spell = require('../Spell');

class CrushingFist extends Spell {
    constructor() {
        super();
        this.name = 'Crushing Fist   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = CrushingFist;