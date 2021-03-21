const Psionic = require('../Psionic');

class PsiSword extends Psionic {
    constructor() {
        super();
        this.name = 'Psi-Sword';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '30 I.S.P.';
    }
}

module.exports = PsiSword;