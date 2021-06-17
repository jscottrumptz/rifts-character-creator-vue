const Spell = require('../Spell');

class Lightblade extends Spell {
    constructor() {
        super();
        this.name = 'Lightblade';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = Lightblade;