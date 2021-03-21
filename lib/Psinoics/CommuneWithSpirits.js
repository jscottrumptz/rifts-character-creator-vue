const Psionic = require('../Psionic');

class CommuneWithSpirits extends Psionic {
    constructor() {
        super();
        this.name = 'Commune with Spirits';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = CommuneWithSpirits;