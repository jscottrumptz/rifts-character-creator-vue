const Psionic = require('../Psionic');

class PsychicPurification extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Purification';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Immediate.';
        this.cost = '8 I.S.P.';
    }
}

module.exports = PsychicPurification;