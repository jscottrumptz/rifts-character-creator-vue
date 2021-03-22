const Psionic = require('../Psionic');

class HealingTouch extends Psionic {
    constructor() {
        super();
        this.name = 'Healing Touch';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Instant, with lasting effects.';
        this.cost = '6 I.S.P.';
        this.lengthOfTrance = "Two minutes (8 melee rounds).";
        this.description = `    The Healing Touch is a remarkable healing ability that can instantly heal cuts, burns, bruises and similar physical wounds. The touch re-stores 2D4 Hit Points or 2D6 S.D.C. The Healing Touch can only be used on other living creatures, never on the psychic himself.`;
    }
}

module.exports = HealingTouch;