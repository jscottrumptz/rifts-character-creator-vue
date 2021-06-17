const Spell = require('../Spell');

class Calling extends Spell {
    constructor() {
        super();
        this.name = 'Calling';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = Calling;