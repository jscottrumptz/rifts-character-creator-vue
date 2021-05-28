const Skill = require('../Skill');

class SewingOrTailoring extends Skill {
    constructor() {
        super();
        this.name = `Sewing or Tailoring`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The practiced skill with the needle and thread to mend clothing, do minor alterations, and layout, cut and sew simple patterns.

This is not a tailoring ability, but can become tailoring if this skill is selected twice (if so make skill Sewing: Tailoring).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = `10`;
        this.takeTwice = `true`;
    }
}

module.exports = SewingOrTailoring;