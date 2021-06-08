const Skill = require('../Skill');

class WPArchery extends Skill {
    constructor() {
        super();
        this.name = `W.P. Archery`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is an expertise with bow weapons of all kinds. The character can use all manner of bows and arrows,including short bows, long bows, all types of modern compound bows, crossbow pistols, and repeating light and heavy crossbows. A trained archer may try a shot at 50% greater distance than the average range of a bow weapon but does so without benefit of any bonus to strike or disarm. The character loses all bonuses and the rate of fire is reduced by half when running and shooting, flying, riding on horseback, or when shooting from a moving vehicle, or while otherwise unbalanced.`;
        this.bonus = `+1 to strike at levels 1, 2, 4, 6, 8, 10, 12, and 14.
+1 to parry with a bow.
+1 to disarm at levels 2, 5, 10, and 15.
2 shots per melee round at level 1.
+1 shot per melee round at levels 2, 4, 5, 8, 10, 12, and 14.`;
    }
}

module.exports = WPArchery;