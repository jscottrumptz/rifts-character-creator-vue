const Psionic = require('../Psionic');

class PsychicDiagnosis extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Diagnosis';
        this.group = 'Healing';
        this.range = 'Touch or within 3 feet (0.9 m).';
        this.duration = 'Immediate knowledge.';
        this.cost = '4 I.S.P.';
        this.savingThrow = 'None.';
        this.lengthOfTrance = '2D4 melees of meditation/focus.';
        this.description = `    The psychic healer can sense physical pain and damage, external and internal injury. disease and possession with absolute clarity. This pinpoint accuracy enables the character to suggest treatment or to con-duct psychic surgery.`;
    }
}

module.exports = PsychicDiagnosis;