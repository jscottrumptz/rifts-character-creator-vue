const Skill = require('../Skill');

class WPBoltActionRifleHuntingOrSnipingOrShotguns extends Skill {
    constructor() {
        super();
        this.name = `W.P. Bolt Action Rifle (hunting or sniping or shotguns)`;
        this.group = `Weapon Proficiencies Modern`;
        this.isSecondary = false;
        this.note = `Training: Enables the character to easily reload, dissasemble, unjam, clean, or otherwise maintain the weapon.

Recognise Weapon Quality: -30% at level 1, +6% per level of experience.`;
        this.description = `This modern weapon proficiency includes most hunting rifles and shotguns; not an automatic firing weapon.`;
        this.bonus = `+1 to strike at levels 1, 3, 5 ,7,  9, 11, 13.`;
    }
}

module.exports = WPBoltActionRifleHuntingOrSnipingOrShotguns;