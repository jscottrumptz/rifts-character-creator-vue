const Spell = require('../Spell');

class Befuddle extends Spell {
    constructor() {
        super();
        this.name = 'Befuddle';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `100 feet (30.5 m).`;
        this.duration = `Two minutes (8 melees) per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    An enchantment that temporarily causes its victim to become con-fused and disoriented. Concentration and reactions are impaired. Those affected are - 2 to strike, parry and dodge; attacks per melee are reduced by half and all skills suffer a penalty of - 20%. Each invocation affects only one individual each time it is cast. A successful save vs magic means the intended victim suffers no impairment.`;
    }
}

module.exports = Befuddle;