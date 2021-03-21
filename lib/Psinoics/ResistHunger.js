const Psionic = require('../Psionic');

class ResistHunger extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Hunger';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '6 hours.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = ResistHunger;