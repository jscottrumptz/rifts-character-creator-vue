const Psionic = require('../Psionic');

class PPEShield extends Psionic {
    constructor() {
        super();
        this.name = 'P.P.E. Shield';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '6 minutes per level of experience.';
        this.cost = '10 I.S.P.';
        this.description = `    A psionic defense that can be used to prevent P.P.E. vampires, Psi-Stalkers, and mages from siphoning off one's psychic energy. The shield works similarly to a Mind Block, only it prevents others from draining one's P.P.E.`;
    }
}

module.exports = PPEShield;