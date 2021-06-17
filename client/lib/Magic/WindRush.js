const Spell = require('../Spell');

class WindRush extends Spell {
    constructor() {
        super();
        this.name = 'Wind Rush';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = WindRush;