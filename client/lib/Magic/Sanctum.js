const Spell = require('../Spell');

class Sanctum extends Spell {
    constructor() {
        super();
        this.name = 'Sanctum';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = Sanctum;