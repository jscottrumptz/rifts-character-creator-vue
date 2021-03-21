const Psionic = require('../Psionic');

class MentallyPossessOthers extends Psionic {
    constructor() {
        super();
        this.name = 'Mentally Possess Others';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '30 I.S.P.';
    }
}

module.exports = MentallyPossessOthers;