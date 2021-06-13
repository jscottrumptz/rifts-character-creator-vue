const Psionic = require('../Psionic');

class RestorePPE extends Psionic {
    constructor() {
        super();
        this.name = 'Restore P.P.E';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Permanent.';
        this.cost = '4 plus the amount of P.P.E. transferred.';
        this.description = `    This power allows the psychic to convert some of his I.S.P. into P.P.E. energy and transfer that energy to another person. Two I.S.P. counts as one P.P.E. point. In addition, the conversion and transfer costs four I.S.P. to initiate. For example, 10 I.S.P. converts into five P.P.E. and costs an additional four points to make the transferal and conversion. Total cost is 14 I.S.P. A Mind Block will prevent this energy transfer. Note: P.P.E. cannot be turned into I.S.P.`;
    }
}

module.exports = RestorePPE;