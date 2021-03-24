const Psionic = require('../Psionic');

class ResistThirst extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Thirst';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '6 hours.';
        this.cost = '6 I.S.P.';
        this.description = `    This ability is identical to the Resist Hunger psi-power except it applies to the consumption of water. It does not negate the long-range damage from dehydration.`;
    }
}

module.exports = ResistThirst;