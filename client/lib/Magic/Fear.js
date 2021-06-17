const Spell = require('../Spell');

class Fear extends Spell {
    constructor() {
        super();
        this.name = 'Fear';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Fear;