const Psionic = require('../Psionic');

class PsychicDiagnosis extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Diagnosis';
        this.group = 'Healing';
        this.range = 'Touch or within 3 feet (0.9 m).';
        this.duration = 'Immediate knowledge.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = PsychicDiagnosis;