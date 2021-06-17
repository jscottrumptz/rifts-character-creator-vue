const Spell = require('../Spell');

class ReOpenGateway extends Spell {
    constructor() {
        super();
        this.name = 'Re-Open Gateway   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = ReOpenGateway;