const Spell = require('../Spell');

class BlindingFlash extends Spell {
    constructor() {
        super();
        this.name = 'Blinding Flash';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `10 foot (3 m) radius; up to 60 feet (18.3 m) away.`;
        this.duration = `Instant.`;
        this.cost = `1 P.P.E.`;
        this.savingThrow = `Standard; -1 if 3 P.P.E. points are pumped into this spell.`;
        this.description = `    This invocation creates a sudden burst of intense, white light, temporarily blinding everyone in its ten foot (3 m) radius. Victims are blinded for one to four melee rounds, and are -10 to strike, parry and dodge. The chance of falling is 01-50% every 10 feet (3 m). The magic can be cast up to 60 feet (18.3 m) away. Saving throw is standard; those who successfully save vs magic are not blinded. Note: Does not affect robotic, bionic or cybernetic eyes.`;

    }
}

module.exports = BlindingFlash;