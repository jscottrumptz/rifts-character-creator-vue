const Psionic = require('../Psionic');

class PsychicSurgery extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Surgery';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Varies with injury.';
        this.cost = '14 I.S.P.';
        this.lengthOfTrance = '2D6 minutes of preparatory meditation, plus the duration of the surgery (which is half the time of conventional modem medicine).';
        this.description = `    Psychic Surgery is used to repair broken bones, and internal injuries. and for the removal of foreign objects (bullets, arrows, etc.) using only one’s bare hands; no tools or instruments. Can also be used to heal a character who has suffered so much damage that he or she has lapsed into a coma (zero Hit Points or less). Psychic Surgery is the equivalent or '"professional hospital'' treatment. The recovery from a coma (near death) is equal to treatment from a hospital, 1-66%. Note that there is minimal bleeding and pain, and absolutely no scarring from Psychic Surgery (no pain if the Deaden Pain ability is used).`;
        this.note = `A Psychic Diagnosis must be made before surgery is possible.`
    }
}

module.exports = PsychicSurgery;