const Spell = require('../Spell');

class Firequake extends Spell {
    constructor() {
        super();
        this.name = 'Firequake   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = Firequake;