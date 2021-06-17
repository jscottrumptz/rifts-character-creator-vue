const Spell = require('../Spell');

class DetectConcealment extends Spell {
    constructor() {
        super();
        this.name = 'Detect Concealment';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = DetectConcealment;