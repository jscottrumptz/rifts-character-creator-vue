const Psionic = require('../Psionic');

class MachineGhost extends Psionic {
    constructor() {
        super();
        this.name = 'Machine Ghost';
        this.group = 'Sensitive';
        this.range = 'Self, computer by touch.';
        this.duration = '3 minutes per level of experience.';
        this.cost = '12 I.S.P.';
    }
}

module.exports = MachineGhost;