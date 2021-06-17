const Spell = require('../Spell');

class TeleportLesser extends Spell {
    constructor() {
        super();
        this.name = 'Teleport: Lesser   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = TeleportLesser;