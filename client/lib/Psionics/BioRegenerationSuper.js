const Psionic = require('../Psionic');

class BioRegenerationSuper extends Psionic {
    constructor() {
        super();
        this.name = 'Bio-Regeneration (Super)';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = 'Permanent.';
        this.cost = '20 I.S.P.';
        this.description = `    Another bio-manipulation power that enables the psionic to direct his psychic energies to immediate self-healing. The character must concentrate for one full minute while his body instantly heals itself. 4D6 Hit Points and 4D6 S.D.C. points are simultaneously restored at the end of 60 seconds! As usual, there is no scarring.`
    }
}

module.exports = BioRegenerationSuper;