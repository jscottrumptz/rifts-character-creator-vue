const Psionic = require('../Psionic');

class TelekineticLeap extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Leap';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'One melee attack/action; in this case, a leap.';
        this.cost = '8 I.S.P.';
    }
}

module.exports = TelekineticLeap;