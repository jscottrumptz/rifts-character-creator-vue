const Spell = require('../Spell');

class ControllenslaveEntity extends Spell {
    constructor() {
        super();
        this.name = 'ControllEnslave Entity';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = ControllenslaveEntity;