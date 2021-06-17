const Spell = require('../Spell');

class EyesOfThoth extends Spell {
    constructor() {
        super();
        this.name = 'Eyes of Thoth';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = EyesOfThoth;