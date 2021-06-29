const Spell = require('../Spell');

class ElectricArc extends Spell {
    constructor() {
        super();
        this.name = 'Electric Arc';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `30 feet (9 m) per level of experience.`;
        this.duration = `One melee round.`;
        this.cost = ` P.P.E.`;
        this.damage = `2D6 M.D.`;
        this.savingThrow = `Dodge.`;
        this.description = `    A simple offensive spell, the Electric Arc causes a crackling bolt of blue energy to leap from the spell caster's hand(s) to the intended target; point and shoot; +2 to strike. 
    Each electrical blast counts as one melee attack/action and is limited by the character's total number of attacks. This means a character with four attacks per melee round uses up one attack to cast the spell, leaving him with three electrical attacks possible that melee round. While the damage is not great, it is accurate, and is an easy, inexpensive spell to cast.`;
    }
}

module.exports = ElectricArc;