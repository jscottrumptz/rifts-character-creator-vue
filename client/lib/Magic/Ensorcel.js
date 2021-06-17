const Spell = require('../Spell');

class Ensorcel extends Spell {
    constructor() {
        super();
        this.name = 'Ensorcel';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = Ensorcel;