const Spell = require('../Spell');

class Hallucination extends Spell {
    constructor() {
        super();
        this.name = 'Hallucination';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = Hallucination;