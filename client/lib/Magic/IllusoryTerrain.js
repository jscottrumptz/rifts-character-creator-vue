const Spell = require('../Spell');

class IllusoryTerrain extends Spell {
    constructor() {
        super();
        this.name = 'Illusory Terrain';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = IllusoryTerrain;