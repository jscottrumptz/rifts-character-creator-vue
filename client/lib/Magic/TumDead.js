const Spell = require('../Spell');

class TumDead extends Spell {
    constructor() {
        super();
        this.name = 'Tum Dead';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Up to 60 feet (18.3 m) away.`;
        this.duration = `Instant effect.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    The utterance of this invocation will tum/repel ID6 animated dead per level of experience. This means that those creatures affected will tum and immediately leave the area without harming the spell caster or anyone near him. The dead who are turned will not come back for 24 hours. This magic only affects "animated" dead and skeletons or corpses that are magically animated like marionettes, but will not affect vampires, zombies, mummies, other undead or any corpse or skeleton possessed by a living entity.`;
    }
}

module.exports = TumDead;