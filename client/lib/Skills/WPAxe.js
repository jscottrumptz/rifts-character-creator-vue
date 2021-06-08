const Skill = require('../Skill');

class WPAxe extends Skill {
    constructor() {
        super();
        this.name = `W.P. Axe`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is training with all types of large axe weapons, including single blade and double-headed axes, battle axe, and picks. Not deisgned for throwing.`;
        this.bonus = `+1 to strike at levels 2, 5, 8, 12, and 15.
+1 to parry at levels 2, 5, 8, 12, and 15.
+1 to strike when thrown at levels 5, 8, and 12.`;
    }
}

module.exports = WPAxe;