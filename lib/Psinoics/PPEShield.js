const Psionic = require('../Psionic');

class PPEShield extends Psionic {
    constructor() {
        super();
        this.name = 'P.P.E. Shield';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '6 minutes per level of experience.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = PPEShield;