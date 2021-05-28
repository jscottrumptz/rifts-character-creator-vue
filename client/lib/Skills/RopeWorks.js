const Skill = require('../Skill');

class RopeWorks extends Skill {
    constructor() {
        super();
        this.name = `Rope Works`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is a skill that takes into account the various needs and uses of rope. The character knows a variety of ways to tie knots, the advantages to various types of ropes and cords, their tensile strength and how to weave/make rope. A failed roll to tie a knot means that it is loose and sloppy and easy to untie, slip out of, or likely to unravel or snap when strained.

Characters bound/tied by this character are -10% to escape/slip knots.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = RopeWorks;