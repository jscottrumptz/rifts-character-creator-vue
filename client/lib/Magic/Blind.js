const Spell = require('../Spell');

class Blind extends Spell {
    constructor() {
        super();
        this.name = 'Blind';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Blind;