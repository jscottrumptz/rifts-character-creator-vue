const Psionic = require('../Psionic');

class MaskISPAndPsionics extends Psionic {
    constructor() {
        super();
        this.name = 'Mask I.S.P. & Psionics';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '7 I.S.P.';
        this.description = `    This is a psionic power that enables the character to completely mask all spiritual aspects of his psionic energy and powers. Even the aura is temporarily altered. As a result, other psychics, Dog Boys, Psi-Stalkers, and creatures who can Detect Psionics or See Aura will not sense psionics in a character who is masked. However, the masked psychic must "block" himself from the world, which means he cannot use any of his psionic senses or abilities, nor receive Empathic or Telepathic impressions until he lets the mask go.`;
    }
}

module.exports = MaskISPAndPsionics;