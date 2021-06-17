const Spell = require('../Spell');

class ShadowWall extends Spell {
    constructor() {
        super();
        this.name = 'Shadow Wall';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = ShadowWall;