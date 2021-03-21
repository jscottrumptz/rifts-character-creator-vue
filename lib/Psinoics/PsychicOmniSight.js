const Psionic = require('../Psionic');

class PsychicOmniSight extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Omni-Sight';
        this.group = 'Super';
        this.range = '500 foot ( 152 m) radius.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '15 I.S.P.';
    }
}

module.exports = PsychicOmniSight;