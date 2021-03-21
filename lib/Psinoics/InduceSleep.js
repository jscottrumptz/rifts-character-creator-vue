const Psionic = require('../Psionic');

class InduceSleep extends Psionic {
    constructor() {
        super();
        this.name = 'Induce Sleep';
        this.group = 'Healing';
        this.range = 'Touch or within 6 feet (1.8 m).';
        this.duration = 'One hour per level of experience (or until awakened).';
        this.cost = '4 I.S.P.';
    }
}

module.exports = InduceSleep;