const Skill = require('../Skill');

class WPShotguns extends Skill {
    constructor() {
        super();
        this.name = `W.P. Shotguns`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `false`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `A familiarity with the classic double-barrel shotgun and police and military versions of shotguns with ammo-drums.

Shotguns can fire once or twice per melee (double-barrel). It can fire both rounds simultaneously or one at a time. Buckshot scatters, and will strike the specific target plus 1D4 others within its blast area (approximately a 15ft (4.6m) area).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 1, 3, 6, 10, and 14.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPShotguns;