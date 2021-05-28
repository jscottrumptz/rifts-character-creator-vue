const Skill = require('../Skill');

class WPBlunt extends Skill {
    constructor() {
        super();
        this.name = `W.P. Blunt`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is training with all types of blunt weapons, including maces, hammers, cudgels, steel or lead pipes, staves, and clubs. Not designed for throwing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 3, 6, 9, and 12.
+1 to parry at levels 1, 3, 6, 9, and 12.
+1 to strike when thrown at levels 5, 10, and 15.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPBlunt;