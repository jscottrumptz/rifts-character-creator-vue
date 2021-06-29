const Spell = require('../Spell');

class FistOfFury extends Spell {
    constructor() {
        super();
        this.name = 'Fist of Fury';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self or one person by touch.`;
        this.duration = `Varies with P.S.`;
        this.cost = `10 P.P.E. for oneself or 50 P.P.E. to cast upon another. `;
        this.savingThrow = `None.`;
        this.description = `This spell causes the spell caster's dominant hand to glow with a fierce red light. The character can then punch with Mega-Damage power as if his or her strength were supernatural (1D6 M.D. minimum damage). However, the mage can only do normal punches, not power punches, and does not get any additional attacks per melee round. Furthermore, the character can not parry Mega-Damage energy attacks, but can grab and parry physical Mega-Damage melee weapons such as a magical sword or Vibro-Blade. The fist is encased in magical energy and releases a shower of energy sparks on impact.`;
        this.note = `This spell can not be placed on Automatons, robots or other non-living things, nor the supernatural.`;
    }
}

module.exports = FistOfFury;