const Spell = require('../Spell');

class SeeTheInvisible extends Spell {
    constructor() {
        super();
        this.name = 'See the Invisible';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = SeeTheInvisible;