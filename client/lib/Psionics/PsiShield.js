const Psionic = require('../Psionic');

class PsiShield extends Psionic {
    constructor() {
        super();
        this.name = 'Psi-Shield';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '30 I.S.P.';
        this.description = `A companion power to the Psi-Sword, in which the psionic can cre-ate a Mega-Damage shield out of thin air. The shield can be used to parry all hand to hand combat attacks, including attacks from robots, power armor, and magic. The shield can not be use to parry energy blasts or projectiles. Shield M.D.C. is 80.`;
    }
}

module.exports = PsiShield;