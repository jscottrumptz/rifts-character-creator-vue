const Psionic = require('../Psionic');

class HealingTouch extends Psionic {
    constructor() {
        super();
        this.name = 'Healing Touch';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Instant, with lasting effects.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = HealingTouch;