const Psionic = require('../Psionic');

class ResistFatigueHealing extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Fatigue';
        this.group = 'Healing';
        this.range = 'Self.';
        this.duration = 'One hour plus 20 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.lengthOfTrance = '1D6 melees of preparatory meditation.';
        this.description = `    A mind over matter discipline which enables the character to engage in physical activity without suffering from exhaustion. However, fatigue is only temporarily suspended, so the psychic feels extremely tired and may even collapse when the duration of this power elapses.`;
    }
}

module.exports = ResistFatigueHealing;