const Psionic = require('../Psionic');

class TelekineticAccelerationAttack extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Acceleration Attack';
        this.group = 'Super';
        this.range = '50 feet ( 15 m) +10 (3 m) per level of experience; line of sight. ';
        this.duration = 'Instant.';
        this.cost = '10 I.S.P. for SDC damage. 20 I.S.P. for Mega-Damage. ';
        this.description = `    This power works on the same principle as the rail gun but uses telekinetic power rather than electromagnetic force. Rather than use Telekinesis to lift and move one or more objects, this Super-Psionic power causes a half dozen to a dozen small objects (coins, pencils, small stones, arrows, unloaded bullets, etc.) to hurl at an incredibly high velocity in a powerful (if short-range) burst of telekinetic energy. All items strike one target at tornado wind velocity.`;
        this.damage = `If 10 I.S.P. are expended the damage inflicted is 2D4x10 S.D.C. / If 20 I.S.P. are expended, the damage is 3D6+4 Mega-Damage!`;
        this.note = ` The psychic must roll to strike at +1 to do so (no other bonuses apply except any O.C.C./R.C.C. psi-power bonus) and the target must be clearly visible. The psionic attack counts as one of the character's melee attacks.`;
    }
}

module.exports = TelekineticAccelerationAttack;