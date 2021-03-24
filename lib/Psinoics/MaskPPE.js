const Psionic = require('../Psionic');

class MaskPPE extends Psionic {
    constructor() {
        super();
        this.name = 'Mask P.P.E.';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience. ';
        this.cost = '4 I.S.P.';
        this.description = `    A psionic power that enables the character to completely mask all but 1D4 P.P.E. of his personal P.P.E. base. Characters who can sense magic energy or see aura will regard this character as having an insignificant amount of P.P.E. This power is especially good as protection against Psi-Stalkers and other P.P.E. vampires. Mystics can easily hide their magical powers through this psionic concealment.`;
    }
}

module.exports = MaskPPE;