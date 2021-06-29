const Spell = require('../Spell');

class ThrowingStones extends Spell {
    constructor() {
        super();
        this.name = 'Throwing Stones';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `200 feet (61 m) + 100 feet (30.5 m) per level of experience. Self only.`;
        this.duration = `Two melee rounds.`;
        this.cost = `5 P.P.E.`;
        this.damage = `1D6 M.D. + 1 M.D. point per level of experience.`;
        this.savingThrow = `Dodge.`;
        this.description = `    This spell enables the caster to draw upon the earth to magically make a hardball-sized, circular stone appear in his hand per each of his melee actions. The stone can then be magically hurled with surprising accuracy and distance. The magical stone hits with the force of a cannonball, and is temporarily a Mega-Damage structure and weapon. The spell caster chooses the target, then throws the magical stone as he would a ball, but with a +2 bonus to strike (P.P. attribute and targeting bonuses are also applicable). The target may attempt to dodge the attack, but the stones are thrown too fast for most normal beings to parry (-4). After the stone hits, it crumbles into dirt. Creating and throwing count as one melee attack/action.`;
    }
}

module.exports = ThrowingStones;