const Psionic = require('../Psionic');

class IntuitiveCombat extends Psionic {
    constructor() {
        super();
        this.name = 'Intuitive Combat';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2 melee rounds per level of experience.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = IntuitiveCombat;