const Psionic = require('../Psionic');

class PsychicSurgery extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Surgery';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Varies with injury.';
        this.cost = '14 I.S.P.';
    }
}

module.exports = PsychicSurgery;