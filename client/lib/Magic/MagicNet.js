const Spell = require('../Spell');

class MagicNet extends Spell {
    constructor() {
        super();
        this.name = 'Magic Net';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `60 feet (18.3 m).`;
        this.duration = `Two melees (30 seconds) per level of the spell caster.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `Dodge of 16 or higher.`;
        this.description = `    This spell creates a net composed of magic fibers and can snare up to 1-6 human-sized victims within a 10 foot (3 m) area. Normal weapons can not cut through the net; only Mega-Damage weapons, magic weapons, and magic can affect this net Even then, it requires a full two melee rounds to cut or blast out (a Dispel Magic Barriers will dispel it instantly). Anyone caught in the Magic Net is helpless and unable to at-tack or defend. The spell caster can cancel the net at any time.`;
        this.note = `A Magic Net can trap beings larger than human-sized provided the spell does not exceed the normal area of effect. To hurt someone already caught in a Magic Net without harming the net itself requires a Called Shot or a roll of 16 or higher to strike. Characters caught in a Magic Net can Tum to Mist or Teleport out of the net. However, this will re-quire a successful saving throw vs magic. A character who was intangible/mist before the Net was cast is NOT caught by it.`;
    }
}

module.exports = MagicNet;