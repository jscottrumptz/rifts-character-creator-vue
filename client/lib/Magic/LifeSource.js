const Spell = require('../Spell');

class LifeSource extends Spell {
    constructor() {
        super();
        this.name = 'Life Source';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = LifeSource;