const Psionic = require('../Psionic');

class RadiateHorrorFactor extends Psionic {
    constructor() {
        super();
        this.name = 'Radiate Horror Factor';
        this.group = 'Super';
        this.range = 'Self; affects all who come within 100 feet (30.5 m) of the psychic.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '8 I.S.P.';
        this.savingThrow = `-1 to save vs Horror Factor`;
        this.description = `    The psychic can channel his psionic powers, alignment and emotions to radiate as an aura of power that is frightening. This aura is equal to a Horror Factor and perceived on a subconscious level by all who see the psychic or come within range. The usual H.F. reaction and penalties apply. See the combat section of this book for details on Horror Factor.

    The level of horror varies as follows:
• Horror Factor 10 if the character is of a good or Unprincipled alignment. 
• Horror Factor 10 + 1 per every three levels of experience if the character is Anarchist. 
• Horror Factor 12 + 1 per every three levels of experience if the character is of an evil alignment. 
• Add one Horror Factor point to any of the above if the character is also insane or enraged beyond reason.`;
    }
}

module.exports = RadiateHorrorFactor;