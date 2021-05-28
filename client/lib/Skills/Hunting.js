const Skill = require('../Skill');

class Hunting extends Skill {
    constructor() {
        super();
        this.name = `Hunting`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill of killing and preparing animals for food. Includes a fair knowledge of animal habits and patterns,hunting techniques for baiting, trapping, and the construction of binds and tree stands that conceal one's presence and increase the chance of getting prey.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Cook Game Animals (rabbit, raccoon, pheasant, deer, etc. only) +10%
Imitate Voices & Sounds +4%
Prowl +2%
Skin and Prepare Animal Hides +5%
Track & Trap Animals +5%`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Hunting;