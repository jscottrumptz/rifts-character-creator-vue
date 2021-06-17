const Spell = require('../Spell');

class HouseOfGlass extends Spell {
    constructor() {
        super();
        this.name = 'House of Glass   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = HouseOfGlass;