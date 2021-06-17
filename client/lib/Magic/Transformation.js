const Spell = require('../Spell');

class Transformation extends Spell {
    constructor() {
        super();
        this.name = 'Transformation';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = Transformation;