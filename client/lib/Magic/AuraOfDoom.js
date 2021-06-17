const Spell = require('../Spell');

class AuraOfDoom extends Spell {
    constructor() {
        super();
        this.name = 'Aura of Doom';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = AuraOfDoom;