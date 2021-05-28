const Skill = require('../Skill');

class WPShield extends Skill {
    constructor() {
        super();
        this.name = `W.P. Shield`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is combat skill with large and small shields used primarily for parrying and self defense. A shield can be used in one hand and a weapon in the other. No bonuses apply when the shield is thrown.

A shield can not be used to block bullets or energy blasts easily. Any such attempt is done without bonuses (straight dice roll) and with a penalty as noted below. Blocking thrown knives, spears, arrows, and other similar weapons also has a penalty and is noted below.

The shield has limited S.D.C. and only really takes damage when used to block energy blasts or explosions, or is specifically targeted by an opponent with the intention of destroying or chopping through the shield. In these cases, subtract 10% of the damage that would normally be inflicted by a weapon when parried or blocked by the shield. When all S.D.C. has gone, the shield has too many holes, cracks, and weaknesses to offer any further protection. The next strike will punch right through or shatter it and hit the user at full force and thus full damage.`;
        this.reqOCCGroup = ``;
        this.penalty = `-8 to parry bullets or energy blasts.
-3 to parry thrown weapons (knives, spears etc.).`;
        this.bonus = `+1 to parry at levels 1, 3, 7, 10, and 13.
+1 to strike with shield at levels 4, 8, and 12.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WPShield;