const Spell = require('../Spell');

class TargetedDeflection extends Spell {
    constructor() {
        super();
        this.name = 'Targeted Deflection    ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = TargetedDeflection;