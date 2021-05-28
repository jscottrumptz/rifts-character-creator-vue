const Skill = require('../Skill');

class JetPacks extends Skill {
    constructor() {
        super();
        this.name = `Jet Packs`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The skill to piloting backpack-style units that strap to the back of an individual to carry him airborne. The typical jet pack is a one person unit capable of hovering above the ground and flying at an average altitude of 300-1,000 feet (91.5-305m).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `42`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = JetPacks;