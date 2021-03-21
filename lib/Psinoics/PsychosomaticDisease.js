const Psionic = require('../Psionic');

class PsychosomaticDisease extends Psionic {
    constructor() {
        super();
        this.name = 'Psychosomatic Disease';
        this.group = 'Super';
        this.range = '10 feet (3 m) and verbal suggestion. ';
        this.duration = '1D4 days per level of the psychic. ';
        this.cost = '30 I.S.P.';
    }
}

module.exports = PsychosomaticDisease;