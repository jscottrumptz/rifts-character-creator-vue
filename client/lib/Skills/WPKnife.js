const Skill = require('../Skill');

class WPKnife extends Skill {
    constructor() {
        super();
        this.name = `W.P. Knife`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is training with all types of daggers and knives. Also applies to Vibro-Blades and Vibro-Claws.`;
        this.bonus = `+1 to strike at levels 2, 4, 7, 10, and 13.
+1 to parry at levels 1, 3, 6, 9, and 12.
+1 to strike when thrown at levels 1, 3, 6, 8, 10, and 13.`;
    }
}

module.exports = WPKnife;