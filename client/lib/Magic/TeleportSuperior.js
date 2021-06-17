const Spell = require('../Spell');

class TeleportSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Teleport: Superior';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = TeleportSuperior;