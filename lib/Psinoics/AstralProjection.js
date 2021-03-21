const Psionic = require('../Psionic');

class AstralProjection extends Psionic {
    constructor() {
        super();
        this.name = 'Astral Projection';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '8 I.S.P.';
    }
}

module.exports = AstralProjection;