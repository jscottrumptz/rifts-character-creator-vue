const Skill = require('../Skill');

class WPHandguns extends Skill {
    constructor() {
        super();
        this.name = `W.P. Handguns`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = `true`;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This is familiarity with all types of projectile firing handguns, including revolvers and pistols. Revolvers are the classic cylinder-based 'six-shooter.' Pistols are automatic weapons which means the gun keep firing while the trigger is depressed and does not stop until the trigger is released or the ammunition is spent. They come in many calibre rounds (.36, .45, Magnum rounds, and such like) which varies the damage considerably.

Automatic pistols are capable of Single Shots, or Short Bursts (3 shots fired). Revolvers can only fire Single Shots.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike at levels 2, 4, 6, 8, 10, 12, and 14.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPHandguns;