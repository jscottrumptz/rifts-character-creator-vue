const Spell = require('../Spell');

class CloakOfDarkness extends Spell {
    constructor() {
        super();
        this.name = 'Cloak of Darkness';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = CloakOfDarkness;