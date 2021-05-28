const Skill = require('../Skill');

class WPMilitaryFlamethrowers extends Skill {
    constructor() {
        super();
        this.name = `W.P. Military Flamethrowers`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `false`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This is familiarity with different types of flame-casting weapons used by the military and mercenaries.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 2, 5, 10, and 15.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPMilitaryFlamethrowers;