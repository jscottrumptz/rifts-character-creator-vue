const Skill = require('../Skill');

class WPStaff extends Skill {
    constructor() {
        super();
        this.name = `W.P. Staff`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is a combat skill with large and small staves. Staves are not deisnged for throwing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 3, 7, 10, and 13.
+1 to parry at levels 2, 5, 8, 11, and 14.
+1 to strike then thrown at levels 5, 10, and 15.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPStaff;