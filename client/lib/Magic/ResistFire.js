const Spell = require('../Spell');

class ResistFire extends Spell {
    constructor() {
        super();
        this.name = 'Resist Fire';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or others.`;
        this.duration = `20 melees per level of the spell caster.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    With this spell the sorcerer can make himself, or one or two others, fire resistant. This means heat has no ill effect and fire, normal and magical, does half damage. The spell can be cast up to 60 feet (18.3 m). Mega-Damage plasma and fire also do half damage.`;
    }
}

module.exports = ResistFire;