const Psionic = require('../Psionic');

class RadiateHorrorFactor extends Psionic {
    constructor() {
        super();
        this.name = 'Radiate Horror Factor';
        this.group = 'Super';
        this.range = 'Self; affects all who come within 100 feet (30.5 m) of the psychic.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '8 I.S.P.';
    }
}

module.exports = RadiateHorrorFactor;