const Psionic = require('../Psionic');

class ResistFatigue extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Fatigue';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'One hour plus 20 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = ResistFatigue;