const Psionic = require('../Psionic');

class IncreasedHealing extends Psionic {
    constructor() {
        super();
        this.name = 'Increased Healing';
        this.group = 'Healing';
        this.range = 'Touch or within 3 feet (0.9 m).';
        this.duration = '2D4 days.';
        this.cost = '10 I.S.P.';
        this.lengthOfTrance = '1D6 hours.';
        this.description = `    The healer is able to stimulate another person's healing energies, dramatically increasing one's recuperative powers. Hit Points and S.D.C. recovery are double the normal professional treatment rate. That's recovery of 4 Hit Points a day for the first two days and 8 H.P. for each subsequent day until restored to full strength or the psionic energy fades, whichever comes first. S.D.C. is healed at a whopping 12 points per day from the very beginning.`
    }
}

module.exports = IncreasedHealing;