const Psionic = require('../Psionic');

class SenseDimensionalAnomaly extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Dimensional Anomaly';
        this.group = 'Sensitive';
        this.range = '100 feet (30.5 m) radius per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.savingThrow = 'None';
        this.description = `    This power detects the presence of a dimensional anomaly like an open/active dimensional portal or Rift, the random opening and closing of a Rift, Ley Line Storms, and dimensional triangles (e.g. the Devil's Sea/Bermuda Triangle), as well as any disturbances caused by teleportation, the use of Temporal or Ley Line Magic or other powers that disrupt the fabric of reality. The psychic knows when it happens, when it ends/closes, the general direction, and whether it is far or near, but no exact knowledge of its location or what is happening because of it.`;
    }
}

module.exports = SenseDimensionalAnomaly;