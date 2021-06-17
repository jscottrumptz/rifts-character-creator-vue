const Spell = require('../Spell');

class FistOfFury extends Spell {
    constructor() {
        super();
        this.name = 'Fist of Fury';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = FistOfFury;