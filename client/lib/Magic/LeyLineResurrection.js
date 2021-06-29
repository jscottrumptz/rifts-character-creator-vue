const Spell = require('../Spell');

class LeyLineResurrection extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Resurrection';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
        this.range = `One designated individual within 1 0 feet (3 m). Can not be performed on oneself.`;
        this.duration = `One designated individual within 1 0 feet (3 m). Can not be performed on oneself.`;
        this.cost = `2000 P.P.E. (half for Shifters and Necromancers).`;
        this.limitations = `Only restores one designated individual, must be performed on a ley line or ley line nexus, and requires a permanent loss of 2D6 P.P.E. by the performer of the ritual (double if a creature of magic). Of course sufficient P.P.E. (1000-2000 points) is needed and may require blood sacrifice.`;
        this.savingThrow = `None.`;
        this.description = `    This awesome spell will restore life into the recently deceased. The resurrected person will come to life, healed, with all his/her/its normal Hit Points, memories, abilities, and skills before he/she/it died. Limbs lost in the past will remain missing, but the character is otherwise healed and alive (this is not a regeneration process but a revitalization). This spell works only on creatures (including humans and creatures of magic) that have died in the last 24 hours.
    Success factor:
Regardless of the spell caster' s level of experience, the chance of success is 1 -40% (+10% if done at a nexus point). The spell can be attempted on the same corpse no more than three times by the same spell caster (the permanent loss of P.P.E. only occurring when successful). If unsuccessful after three tries another magic weaver may make try. A total of five failed attempts means the person is beyond the help of magic.`;
        this.note = `Necromancers are +5% to resurrect.`;
    }
}

module.exports = LeyLineResurrection;