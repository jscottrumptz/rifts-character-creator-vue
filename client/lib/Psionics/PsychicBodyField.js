const Psionic = require('../Psionic');

class PsychicBodyField extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Body Field';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '30 I.S.P.';
    }
}

module.exports = PsychicBodyField;