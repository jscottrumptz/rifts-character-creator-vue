const Skill = require('../Skill');

class WPSword extends Skill {
    constructor() {
        super();
        this.name = `W.P. Sword`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is a combat skill using large and small swords, including fencing type rapiers, sabres, broadswords, large swords, and short swords. Swords are not designed to be thrown.`;
        this.bonus = `+1 to strike at levels 1, 3, 6, 9, 12, and 15.
+1 to strike when thrown at levels 4, 8, and 12.
+1 to parry at levels 2, 4, 7, 10, and 13.`;
    }
}

module.exports = WPSword;