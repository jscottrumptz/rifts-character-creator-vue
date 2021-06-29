const Spell = require('../Spell');

class FireBolt extends Spell {
    constructor() {
        super();
        this.name = 'Fire Bolt';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Range: 100 feet (30.5 m) plus 5 feet (1.5 m) per level of experience.`;
        this.duration = `Instant.`;
        this.damage = `4D6 M.D.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `Dodge.`;
        this.description = `    The spell caster creates and directs a bolt of M.D. fire that is +4 to strike. Damage is normally 4D6 M.D., or 1D6x10 S.D.C. (the mage can pick which).`;
    }
}

module.exports = FireBolt;