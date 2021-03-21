const Psionic = require('../Psionic');

class TelekineticForceField extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Force Field';
        this.group = 'Super';
        this.range = 'Self or 40 feet ( 12.2 m) per level of experience within line of vision.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '30 I.S.P.';
    }
}

module.exports = TelekineticForceField;