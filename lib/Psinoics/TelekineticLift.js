const Psionic = require('../Psionic');

class TelekineticLift extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Lift';
        this.group = 'Physical';
        this.range = 'Self or Touch.';
        this.duration = '2 melees per level of experience. ';
        this.cost = '6 I.S.P.';
    }
}

module.exports = TelekineticLift;