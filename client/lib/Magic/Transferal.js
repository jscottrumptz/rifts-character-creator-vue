const Spell = require('../Spell');

class Transferal extends Spell {
    constructor() {
        super();
        this.name = 'Transferal';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = Transferal;