const Skill = require('../Skill');

class WPHarpoonandSpeargun extends Skill {
    constructor() {
        super();
        this.name = `W.P. Harpoon & Speargun`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `false`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This is proficiency with the harpoon gun. The weapon can be used either with a plain pointed end or with an explosive head.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 2, 4, 7, 10, and 15.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPHarpoonandSpeargun;