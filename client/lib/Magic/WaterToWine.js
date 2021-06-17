const Spell = require('../Spell');

class WaterToWine extends Spell {
    constructor() {
        super();
        this.name = 'Water to Wine';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = WaterToWine;