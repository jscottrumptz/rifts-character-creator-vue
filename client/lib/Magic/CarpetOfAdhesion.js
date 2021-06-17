const Spell = require('../Spell');

class CarpetOfAdhesion extends Spell {
    constructor() {
        super();
        this.name = 'Carpet of Adhesion   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = CarpetOfAdhesion;