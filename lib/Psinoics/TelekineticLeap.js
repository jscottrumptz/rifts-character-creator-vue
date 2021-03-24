const Psionic = require('../Psionic');

class TelekineticLeap extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Leap';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'One melee attack/action; in this case, a leap.';
        this.cost = '8 I.S.P.';
        this.description = `    This telekinetic application boosts the person's leaping ability, propelling the psychic an additional two feet (0.6 m) when leaping up-wards, and three feet (0.9 m) when leaping across or lengthwise, per level of experience. This power can be used in conjunction with a Leap Kick attack (damage: 6D6+6 plus P.S. bonuses), but the character will take 2D6 S.D.C. points of damage himself from the hard impact. A die roll with impact may be needed to land safely after one of these leaps.`;
    }
}

module.exports = TelekineticLeap;