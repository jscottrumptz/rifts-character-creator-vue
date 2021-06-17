const Spell = require('../Spell');

class CreateMagicScroll extends Spell {
    constructor() {
        super();
        this.name = 'Create Magic Scroll   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = CreateMagicScroll;