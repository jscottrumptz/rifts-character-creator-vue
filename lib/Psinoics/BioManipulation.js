const Psionic = require('../Psionic');

class BioManipulation extends Psionic {
    constructor() {
        super();
        this.name = 'Bio-Manipulation';
        this.group = 'Super';
        this.range = '160 feet ( 48.8 m).';
        this.duration = '4-16 minutes (roll 4D4).';
        this.cost = '10 I.S.P.';
    }
}

module.exports = BioManipulation;