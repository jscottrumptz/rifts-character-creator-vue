const Psionic = require('../Psionic');

class RestorePPE extends Psionic {
    constructor() {
        super();
        this.name = 'Restore P.P.E';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Permanent.';
        this.cost = '4 plus the ammount of P.P.E. transferred.';
    }
}

module.exports = RestorePPE;