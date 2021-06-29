const Spell = require('../Spell');

class MagicShield extends Spell {
    constructor() {
        super();
        this.name = 'Magic Shield';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or other.`;
        this.duration = `Two minutes per level of the spell caster.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell creates a pale white field of energy in the shape of a large, round shield with 60 M.D.C. The shield can be used by the spell caster or be given to someone else. It functions as a normal shield to parry melee attacks (sword blades, clubs, etc.), with a bonus of+ 1 to parry. The shield wielder can also attempt to parry energy blasts and projectiles, but the user has no bonuses and suffers a -8 penalty to parry. The shield takes one quarter damage from all attacks it parries and disappears when all M D.C. are used up, the spell duration elapses, or if the user loses contact with the shield.`;
    }
}

module.exports = MagicShield;