const Spell = require('../Spell');

class Mute extends Spell {
    constructor() {
        super();
        this.name = 'Mute';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = Mute;