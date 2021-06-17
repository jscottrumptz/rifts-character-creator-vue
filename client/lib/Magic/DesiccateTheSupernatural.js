const Spell = require('../Spell');

class DesiccateTheSupernatural extends Spell {
    constructor() {
        super();
        this.name = 'Desiccate the Supernatural';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = DesiccateTheSupernatural;