const Psionic = require('../Psionic');

class AlterAura extends Psionic {
    constructor() {
        super();
        this.name = 'Alter Aura';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'One hour per each level of experience.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = AlterAura;