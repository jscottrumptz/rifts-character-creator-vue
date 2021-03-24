const Psionic = require('../Psionic');

class TelekineticLift extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Lift';
        this.group = 'Physical';
        this.range = 'Self or Touch.';
        this.duration = '2 melees per level of experience. ';
        this.cost = '6 I.S.P.';
        this.description = `    Rather than moving objects solely with the power of the mind, this use of telekinesis increases the character's ability to lift and carry heavy weights. The psychic creates a telekinetic field around the object and lifts both physically and mentally (via telekinesis). This enables the psychic to lift and carry weights 20% heavier than his P.S. normally al-lows. This use of telekinetics is limited exclusively to lifting and carrying heavy weights and cannot be used to hurl boulders and heavy objects as weapons, nor can it be used to augment the damage inflicted by a punch, kick or other physical attacks.`;
    }
}

module.exports = TelekineticLift;