const Spell = require('../Spell');

class Deflect extends Spell {
    constructor() {
        super();
        this.name = 'Deflect   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self.`;
        this.duration = `One melee "action" per level of experience. Thus, a 3rd level mage can try three magical deflections, a 6th level mage six deflections. Each attempt to deflect counts as one of the spell caster' s melee attacks/actions. If the mage chooses to take some action other than Deflect, he loses that Deflect option. Thus, if five Deflect actions were left and the mage throws a punch, he loses one Deflect, leaving him with four. Each action taken after the Deflect spell is cast uses up one available Deflect action.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell allows the spell caster to attempt to magically parry and deflect incoming ranged-weapon attacks such as arrows, bullets, lasers, particle beams, rail guns, fire balls, called lightning, etc. The spell caster gets to roll a normal 20 sided die +4, for his or her parry (plus any P.P. attribute bonus; other parry bonuses do not apply). If successful, the attack is deflected by a small energy field, and harmlessly hits the ground 1D4x 1 O yards/meters away. Such a deflection may hit an ally or innocent bystander if used in a crowded area.
    This spell can also deflect missiles, even volleys, but the spell caster might get caught in the blast radius and innocent bystanders are likely to get hurt. When missiles or powerful energy blasts (those that inflict 1D4x10 M.D. or more damage) are deflected, the character must roll a 20 sided die again, but without benefit of a bonus, to see whether or not the attack is deflected away without harm to others, or whether it strikes an innocent bystander. A roll of 1-4 means the attack is deflected into the ally nearest the mage! A roll of 5-8 means it hits an innocent bystander. A roll of 9 or higher means the attack is deflected without harm to others, unless the area is densely populated or crowded, then innocents are almost certain to be injured. Area affect attacks like exploding rockets, missiles, and grenades, or rail gun bursts may strike and injure or kill dozens of people; G.M.s should use their discretion in such determinations. No, the spell caster cannot accurately deflect the attack into a specific enemy target or location.`;
    }
}

module.exports = Deflect;