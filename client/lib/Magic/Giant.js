const Spell = require('../Spell');

class Giant extends Spell {
    constructor() {
        super();
        this.name = 'Giant';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Giant;