const Skill = require('../Skill');

class WPHeavyMD extends Skill {
    constructor() {
        super();
        this.name = `W.P. Heavy M.D.`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = false;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.
Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This includes plasma ejectors, M.D. rail guns, rocket launchers, mini-missile launchers, and weapon turrets and cannons built into or which are a key part of giant robots, tanks, aircraft and other combat vehicles. A common skill of designated gunners. Damage varies with the type of weapon and manufacturer.`;
    }
}

module.exports = WPHeavyMD;