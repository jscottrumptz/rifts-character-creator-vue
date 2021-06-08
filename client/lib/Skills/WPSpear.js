const Skill = require('../Skill');

class WPSpear extends Skill {
    constructor() {
        super();
        this.name = `W.P. Spear`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is combat skill with large and small spears and javelins (the use of a rifle equipped with a bayonet also falls into this category). Max throwing range is 150 feet (45.7m).`;
        this.bonus = `+1 to strike at levels 1, 3, 6, 9, and 12.
+1 to parry at levels 1, 3, 6, 9, and 12.
+1 to strike when thrown at levels 3, 6, 10, and 14.`;
    }
}

module.exports = WPSpear;