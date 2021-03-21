const Psionic = require('../Psionic');

class SeeAura extends Psionic {
    constructor() {
        super();
        this.name = 'See Aura';
        this.group = 'Sensitive';
        this.range = '60 feet ( 18.3 m) and must be visible.';
        this.duration = '2 melees (30 seconds).';
        this.cost = '6 I.S.P.';
    }
}

module.exports = SeeAura;