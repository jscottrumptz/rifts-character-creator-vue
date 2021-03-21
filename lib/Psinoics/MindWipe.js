const Psionic = require('../Psionic');

class MindWipe extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Wipe';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = 'Special.';
        this.cost = 'Special.';
    }
}

module.exports = MindWipe;