const Psionic = require('../Psionic');

class InduceSleep extends Psionic {
    constructor() {
        super();
        this.name = 'Induce Sleep';
        this.group = 'Healing';
        this.range = 'Touch or within 6 feet (1.8 m).';
        this.duration = 'One hour per level of experience (or until awakened).';
        this.cost = '4 I.S.P.';
        this.lengthOfTrance = 'Two minute preparatory meditation.';
        this.savingThrow = 'Standard; unwilling victims are +5 to save vs psychic attack.';
        this.description = `    This is not an offensive ability, but is intended to be a recuperative power to induce sleep on those who are ill, exhausted, or an insomniac. The person will fall into a normal, restful sleep from which he can be easily roused. Unwilling victims of the Induce Sleep psi-power get a +5 bonus to save. A character must want rest (cannot be involved in combat or some other activity and be forced to fall asleep).`;
    }
}

module.exports = InduceSleep;