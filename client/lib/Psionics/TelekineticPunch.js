const Psionic = require('../Psionic');

class TelekineticPunch extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Punch';
        this.group = 'Physical';
        this.range = 'By touch or one foot (0.3 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = '6 I.S.P.';
        this.savingThrow = 'Dodge or parry as usual.';
        this.description = `    This telekinetic power enables the psychic to deliver a powerful punch or kick-like force through telekinetic energy. The character must actually make a physical punch or kick, but a successful strike delivers a telekinetically enhanced blow. A Telekinetic Punch will inflict 3D6 S.D.C./Hit Point damage plus P.S. bonus (if any), and a kick will do 4D6 S.D.C. plus P.S. bonus. The I.S.P. is spent whether or not the punch or kick actually hits the target (roll to strike as normal). The power is used in conjunction with a normal, physical attack that can be parried or dodged by the enemy. Every time the power is used, the psychic must make a save of 14 or higher or he will take 1D6 points of damage himself as a result of wrenched muscles or a dislocated joint from the extra strain on his body.`;
    }
}

module.exports = TelekineticPunch;