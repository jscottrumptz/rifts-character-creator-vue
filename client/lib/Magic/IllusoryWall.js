const Spell = require('../Spell');

class IllusoryWall extends Spell {
    constructor() {
        super();
        this.name = 'Illusory Wall';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = IllusoryWall;