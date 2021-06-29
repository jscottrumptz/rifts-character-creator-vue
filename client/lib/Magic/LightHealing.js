const Spell = require('../Spell');

class LightHealing extends Spell {
    constructor() {
        super();
        this.name = 'Light Healing';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Touch.`;
        this.duration = `Instant.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster grasps the injured character with both hands, then channels magical energy into him, willing it to aid the person's body in healing. The magic speeds the healing process to clear out minor infection, minor food poisoning/upset stomach, a slight headache, tiny cuts, bumps and bruises. It restores 1D6 S.D.C. or 1D4 Hit Points (not both). The healing is instant and painless. The spell caster may not use this spell on himself.`;
    }
}

module.exports = LightHealing;