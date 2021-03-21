const Psionic = require('../Psionic');

class ResistThirst extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Thirst';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '6 hours.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = ResistThirst;