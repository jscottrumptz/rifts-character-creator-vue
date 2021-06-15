const Psionic = require('../Psionic');

class MindBolt extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Bolt';
        this.group = 'Super';
        this.range = '100 feet (30.5 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = 'Varies.';
        this.description = `    The psionic can focus his psionic energy into a powerful bolt of mental force and hurl it at a visible target with amazing accuracy. The amount of damage the bolt inflicts depends on the amount of energy expended.

• 6 I.S.P. - 1D6 S.D.C. damage.
• 12 I.S.P. - 3D6 S.D.C. damage. 
• 20 I.S.P. - 6D6 S.D.C. damage. 
• 40 I.S.P. - 2D4 Mega-Damage!`;
        this.note = `All Mind Bolts are +4 to strike, but adding an additional 10 I.S.P. increases the strike bonus to +8 to strike. Remember, ley lines and nexus points increase the range and damage. This is a physical at-tack that inflicts physical damage. It does not effect the mind of its victim and will strike the armor of anybody wearing body armor.`;
    }
}

module.exports = MindBolt;