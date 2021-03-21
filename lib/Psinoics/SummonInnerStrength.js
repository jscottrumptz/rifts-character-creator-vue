const Psionic = require('../Psionic');

class SummonInnerStrength extends Psionic {
    constructor() {
        super();
        this.name = 'Summon Inner Strength';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = SummonInnerStrength;