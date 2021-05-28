const Skill = require('../Skill');

class WPAxe extends Skill {
    constructor() {
        super();
        this.name = `W.P. Axe`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is training with all types of large axe weapons, including single blade and double-headed axes, battle axe, and picks. Not deisgned for throwing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 2, 5, 8, 12, and 15.
+1 to parry at levels 2, 5, 8, 12, and 15.
+1 to strike when thrown at levels 5, 8, and 12.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPAxe;