const Psionic = require('../Psionic');

class ImperviousToPoison extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Poison';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '2 minutes (8 melees).';
        this.cost = '4 I.S.P.';
    }
}

module.exports = ImperviousToPoison;