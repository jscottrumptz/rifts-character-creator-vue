const Psionic = require('../Psionic');

class SenseDimensionalAnomaly extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Dimensional Anomaly';
        this.group = 'Sensitive';
        this.range = '100 feet (30.5 m) radius per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = SenseDimensionalAnomaly;