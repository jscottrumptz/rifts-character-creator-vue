const Psionic = require('../Psionic');

class IncreasedHealing extends Psionic {
    constructor() {
        super();
        this.name = 'Increased Healing';
        this.group = 'Healing';
        this.range = 'Touch or within 3 feet (0.9 m).';
        this.duration = '2D4 days.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = IncreasedHealing;