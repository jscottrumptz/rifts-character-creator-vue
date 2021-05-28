const Skill = require('../Skill');

class WPTomahawkThrowingAxe extends Skill {
    constructor() {
        super();
        this.name = `W.P. Tomahawk (throwing axe)`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is training with all types of light throwing axes and tomahawks. Almost exclusive for Native American Indians.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 2, 4, 7, 10, and 13.
+1 to parry at levels 1, 3, 6, 9, and 12.
+1 to strike when thrown at levels 1, 3, 6, 8, 10, and 13.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPTomahawkThrowingAxe;