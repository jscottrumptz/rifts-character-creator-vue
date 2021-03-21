const Psionic = require('../Psionic');

class MaskPPE extends Psionic {
    constructor() {
        super();
        this.name = 'Mask P.P.E.';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience. ';
        this.cost = '4 I.S.P.';
    }
}

module.exports = MaskPPE;