const Spell = require('../Spell');

class CalmStorms extends Spell {
    constructor() {
        super();
        this.name = 'Calm Storms';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = CalmStorms;