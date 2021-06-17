const Spell = require('../Spell');

class ProtectionCircleSimple extends Spell {
    constructor() {
        super();
        this.name = 'Protection Circle: Simple';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = ProtectionCircleSimple;