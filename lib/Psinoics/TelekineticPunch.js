const Psionic = require('../Psionic');

class TelekineticPunch extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Punch';
        this.group = 'Physical';
        this.range = 'By touch or one foot (0.3 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = TelekineticPunch;