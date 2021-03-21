const Psionic = require('../Psionic');

class MaskISPandPsionics extends Psionic {
    constructor() {
        super();
        this.name = 'Mask I.S.P. & Psionics';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '7 I.S.P.';
    }
}

module.exports = MaskISPandPsionics;