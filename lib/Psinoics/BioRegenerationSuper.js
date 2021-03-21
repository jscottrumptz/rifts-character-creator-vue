const Psionic = require('../Psionic');

class BioRegenerationSuper extends Psionic {
    constructor() {
        super();
        this.name = 'Bio-Regeneration (Super)';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = 'Permanent.';
        this.cost = '20 I.S.P.';
    }
}

module.exports = BioRegenerationSuper;