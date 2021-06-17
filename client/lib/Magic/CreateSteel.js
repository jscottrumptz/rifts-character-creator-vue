const Spell = require('../Spell');

class CreateSteel extends Spell {
    constructor() {
        super();
        this.name = 'Create Steel';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = CreateSteel;