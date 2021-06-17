const Spell = require('../Spell');

class InstillKnowledge extends Spell {
    constructor() {
        super();
        this.name = 'Instill Knowledge   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = InstillKnowledge;