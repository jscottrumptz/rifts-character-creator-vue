const Skill = require('../Skill');

class WPSubMachineguns extends Skill {
    constructor() {
        super();
        this.name = `W.P. Sub-Machineguns`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `false`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This modern weapon proficiency includes all small arms automatic weapons like the uzi.

Sub-Machineguns are capable of Short Bursts, Long Bursts, Entire Magazine Bursts, and Wild/Spray Fire.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 3, 6, 9, 12, and 15.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPSubMachineguns;