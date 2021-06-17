const Spell = require('../Spell');

class AstralProjection extends Spell {
    constructor() {
        super();
        this.name = 'Astral Projection   ';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = AstralProjection;