const Psionic = require('../Psionic');

class SeeAura extends Psionic {
    constructor() {
        super();
        this.name = 'See Aura';
        this.group = 'Sensitive';
        this.range = '60 feet ( 18.3 m) and must be visible.';
        this.duration = '2 melees (30 seconds).';
        this.cost = '6 I.S.P.';
        this.savingThrow = `None, but a Mind Block will hide the presence of psychic abilities, the level of P.P.E., and possession by a supernatural force.`
        this.description = `    All things, organic and inorganic, have an aura. The aura has many distinctions and indicates things to the psychic normally invisible to the ordinary eye.

Seeing an aura will indicate the following:
• Estimate the general level of experience. Low (1-3), medium (4-7). high (8th and up). 
• The presence of magic (no indication of what type or the power level). 
• The presence of psychic abilities (again though, not the type or power level).
• High or low base P.P.E. 
• The presence of a Possessing Entity. 
• The presence of an unusual human aberration and/or indicates a serious illness, insanity, or that the individual is not-human, could be mutant or supernatural, but does not specify which.`;
    this.note = `A psychic cannot tell one's alignment by using this power.`;
    }
}

module.exports = SeeAura;