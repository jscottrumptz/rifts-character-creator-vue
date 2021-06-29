const Spell = require('../Spell');

class Telekinesis extends Spell {
    constructor() {
        super();
        this.name = 'Telekinesis';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `60 feet (18.3 m).`;
        this.duration = `One minute (4 melee rounds) per level of experience.`;
        this.cost = `8 P.P.E.`;
        this.savingThrow = `Dodge.`;
        this.description = `    The Telekinesis invocation temporarily empowers the spell caster with the psychic ability to move objects with thought. This power can be used to move or hurl objects, bring them to him, open doors, flick switches, press buttons, and so on.

    Rules and Limitations:
• Maximum Total Weight: 60 pounds (27 kg).
• Attacks Per Melee: Equal to the number of hand to hand attacks per melee that the character may have.
• Bonuses to Strike: +3 with Telekinesis; physical and skill bonuses to strike do not apply when telekinesis is used.
• Bonuses to Parry : +4; physical and skill bonuses to parry do not apply to Telekinesis.

    Damage from Hurled Objects:
• Small: 6 ounces (0.2 kg) to I Ib (0.45 kg) : 1D4.
• Small: 1 .5 to 2.5 Ibs: 1D6.
• Medium: 3 to 4.5 Ibs: 2D4.
• Medium: 5 to 10 lbs: 3D4.
• Large: 11 to 25 Ibs : 3D6.
• Large & Heavy : 26 to 60 Ibs: 4D6.
• Add 1D6 for each additional 20 Ibs (9 kg) of weight.

    Other Restrictions:
• Object being manipulated must be visible.
• Telekinesis can be combined with hand to hand combat, but does not add extra attacks per melee round.
• Influence from ley line energy doubles the amount of weight and range possible.
• Ley line nexus energy triples the amount of weight and range.`;
    }
}

module.exports = Telekinesis;