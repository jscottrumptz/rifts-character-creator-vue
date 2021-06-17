const Spell = require('../Spell');

class SuperhumanSpeed extends Spell {
    constructor() {
        super();
        this.name = 'Superhuman Speed   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = SuperhumanSpeed;