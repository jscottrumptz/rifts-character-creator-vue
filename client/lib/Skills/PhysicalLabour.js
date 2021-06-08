const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class PhysicalLabour extends Skill {
    constructor() {
        super();
        this.name = `Physical Labour`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Not all strength and conditioning comes from deliberate training or sports, some comes from old-fashioned hard work. This skill represents the strength and endurance gained from hard, physical labour, either due to a physical occupation (such as construction, ditch digging, warehouse work loading and unloading boxes, etc.) or really demanding chores at home such as chopping wood, bailing hay, mending fences, etc.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+2 to P.S.
+1 to P.E.
+2D8 to S.D.C.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character) {
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 2;
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(8,2).reduce((a, b) => a + b, 0);
    }
}

module.exports = PhysicalLabour;