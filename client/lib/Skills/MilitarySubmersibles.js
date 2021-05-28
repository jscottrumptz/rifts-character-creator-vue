const Skill = require('../Skill');

class MilitarySubmersibles extends Skill {
    constructor() {
        super();
        this.name = `Military: Submersibles`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The underwater sleds, mini-subs, and commercial and military submarines and submersibles. Does not include power armour or deep sea diving suits.`;
        this.reqOCCGroup = ``;
        this.penalty = `-20% when using alien or unusual submarines.`;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = MilitarySubmersibles;