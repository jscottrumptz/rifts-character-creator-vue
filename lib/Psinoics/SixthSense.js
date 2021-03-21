const Psionic = require('../Psionic');

class SixthSense extends Psionic {
    constructor() {
        super();
        this.name = 'Sixth Sense';
        this.group = 'Sensitive';
        this.range = '90 feet (27.4 m).';
        this.duration = 'Until the danger passes or happens. Bonuses apply only to the first melee round of the attack from the source of the sensed danger.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = SixthSense;