const Skill = require('../Skill');

class WPPolearm extends Skill {
    constructor() {
        super();
        this.name = `W.P. Polearm`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is training with all types of large, bladed spear-like weapons, including the glaive, saber halbard, runka, scythe, and voulge, among others. Not designed for throwing.`;
        this.bonus = `+1 to strike at levels 1, 3, 6, 9, and 12.
+1 to parry at levels 1, 3, 6, 9, and 12.
+1 to strike when thrown at levels 3, 8, and 12.
+2 damage at levels 2 and 8.`;
    }
}

module.exports = WPPolearm;