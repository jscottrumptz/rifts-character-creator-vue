const Spell = require('../Spell');

class RealityFlux extends Spell {
    constructor() {
        super();
        this.name = 'Reality Flux';
        this.group = 'Invocation';
        this.level = 'Ten';
        this.range = `One weapon up to 60 feet (18.3 m) away, or two by touch.`;
        this.duration = `One melee round (15 seconds) per level of the spell caster.`;
        this.cost = `75 P.P.E.`;
        this.savingThrow = `Not applicable to most, except for Rune and Bio-Wizard weapons, and any magical device that contains a living being inside it; they get to make a standard save vs magic.`;
        this.description = `    This spell alters the laws of physics on one weapon (two by touch), including energy weapons, rail guns, explosives, and even magic items (rune weapon, Techno-Wizard sword, etc.). The enchantment temporarily turns the Mega-Damage weapon into an S.D.C./Hit Point weapon! Any attack from that weapon does the equivalent in S.D.C. damage! For example, a Vibro-Blade or magic sword that normally does 2D6 M.D. does only 2D6 S.D.C. for the duration of the spell. Likewise, an energy rifle, Boom Gun or rail gun that might normally fire 4D6 M.D. energy bolts, rounds or explosive grenades, now shoots 4D6 S.D.C. damage blasts. Changing E-Clips or ammo belts makes no difference.
    The weapon returns to normal as soon as the duration of the debilitating magic elapses or is canceled or negated. Note: Not applicable against living beings or magic spells that fire Mega-Damage blasts or other attacks, nor against body armor or walls. Against cyborgs, robots, power armor and vehicles that probably have an arsenal of weapons, only one specific weapon (two by touch) will be affected by this spell; the mage picks which one. Note that the weapon itself remains a Mega-Damage structure even when enchanted, only the measure of damage is temporarily altered.`;
    }
}

module.exports = RealityFlux;