const Psionic = require('../Psionic');

class TelekineticAccelerationAttack extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Acceleration Attack';
        this.group = 'Super';
        this.range = '50 feet ( 15 m) +10 (3 m) per level of experience; line of sight. ';
        this.duration = 'Instant.';
        this.cost = '10 I.S.P. for SD C damage. 20 I.S.P. for Mega-Damage. ';
    }
}

module.exports = TelekineticAccelerationAttack;