const Spell = require('../Spell');

class WorldBizarre extends Spell {
    constructor() {
        super();
        this.name = 'World Bizarre';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = WorldBizarre;