const Skill = require('../Skill');

class WhittlingandSculpting extends Skill {
    constructor() {
        super();
        this.name = `Whittling & Sculpting`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The  art of carving and shaping wood, bone and horn into three dimensional figures/statues/toys, designs, and simple objects like wooden stakes, arrows, fishing hooks, walking sticks, staves, bowls, a simple flute or whistle, and similar. Many characters with this skill simply use it to pass the time and don't necessarily make anything from their whittling. The percentile number indicates the quality of technique and the quality of the work/appearance. Selecting this skill once indicates a talented amateur. Taking the skill twice indicates a professional quality and gains a bonus of +10%.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = `10`;
        this.takeTwice = `true`;
    }
}

module.exports = WhittlingandSculpting;