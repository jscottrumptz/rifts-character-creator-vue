const Spell = require('../Spell');

class SorcerousFury extends Spell {
    constructor() {
        super();
        this.name = 'Sorcerous Fury';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = SorcerousFury;