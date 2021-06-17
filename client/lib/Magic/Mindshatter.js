const Spell = require('../Spell');

class Mindshatter extends Spell {
    constructor() {
        super();
        this.name = 'Mindshatter   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = Mindshatter;