const Skill = require('../Skill');

class WPRifles extends Skill {
    constructor() {
        super();
        this.name = `W.P. Rifles`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `true`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This is familiarity with automatic and semi-automatic rifles, and military assault rifles like the M-16 and AK-47.

These types of weapons are usually capable of Single Shots, Short Bursts, Long Bursts, Entire Magazine Bursts, and Wild/Spray Fire (if the specific rifle can use such types of magazines or drums).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 3, 5, 7, 9, 11, and 13.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPRifles;