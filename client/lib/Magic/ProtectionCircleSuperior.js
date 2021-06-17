const Spell = require('../Spell');

class ProtectionCircleSuperior extends Spell {
    constructor() {
        super();
        this.name = 'Protection Circle: Superior';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = ProtectionCircleSuperior;