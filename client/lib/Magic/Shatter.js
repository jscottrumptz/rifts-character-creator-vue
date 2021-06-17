const Spell = require('../Spell');

class Shatter extends Spell {
    constructor() {
        super();
        this.name = 'Shatter';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = Shatter;